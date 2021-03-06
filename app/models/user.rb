# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  firstName       :string           not null
#  lastName        :string           not null
#  middleName      :string           not null
#

class User < ApplicationRecord

  validates :email, :password_digest, :session_token, :firstName, :middleName, :lastName, presence: true

  validates :email, :uniqueness => { :case_sensitive => false }
  #we never keep passwords in db, so allow_nil is needed
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  #will handle password validations in frontend
  before_validation :downcase_email
  after_initialize :ensure_session_token
  after_create :generate_defaults

  has_many :wallets, foreign_key: :user_id, class_name: :Wallet
  has_one :card, foreign_key: :user_id, class_name: :Card

  has_many :transfers, through: :wallets, source: :transfers
  has_many :receivers, through: :wallets, source: :receivers

  has_many :sellings, through: :wallets, source: :sellings
  has_many :purchases, through: :wallets, source: :purchases

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email.downcase)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def generate_defaults
    btc = Wallet.new(:asset_type => 'BTC', :user_id => self.id, :amount => 0.00, :address => SecureRandom.hex(16))
    bch = Wallet.new(:asset_type => 'BCH', :user_id => self.id, :amount => 0.00, :address => SecureRandom.hex(16))
    eth = Wallet.new(:asset_type => 'ETH', :user_id => self.id, :amount => 0.00, :address => SecureRandom.hex(16))
    etc = Wallet.new(:asset_type => 'ETC', :user_id => self.id, :amount => 0.00, :address => SecureRandom.hex(16))
    ltc = Wallet.new(:asset_type => 'LTC', :user_id => self.id, :amount => 0.00, :address => SecureRandom.hex(16))

    btc.save!
    bch.save!
    eth.save!
    etc.save!
    ltc.save!

    coinface = User.find_by(email: "coinface@coinface.com")

    self.generate_transfer(bch, "BCH", coinface)
    self.generate_transfer(btc, "BTC", coinface)
    self.generate_transfer(eth, "ETH", coinface)
    self.generate_transfer(etc, "ETC", coinface)
    self.generate_transfer(ltc, "LTC", coinface)
  end

  def generate_transfer(wallet, asset_symbol, coinface)

    url = "https://min-api.cryptocompare.com/data/generateAvg?fsym="
    url_end = "&tsym=USD&e=Kraken"

    response = RestClient::Request.execute(
      method: :get,
      url: url+asset_symbol+url_end
    )
    response = JSON.parse(response)
    transfer_cash_amount = (response["RAW"]["PRICE"]*0.001)

    # coinface is master user who possseses infinite assets 
    coinfaceWallet = coinface.get_wallet_by_asset(asset_symbol)
    # I give each user .001 of the 5 assets as a welcome gift
    Transfer.create!( amount: 0.001, cash_amount: transfer_cash_amount, asset_type: asset_symbol,
      sender_wallet_address: coinfaceWallet.address,
      receiver_wallet_address: wallet.address, note: "A gift for joining Coinface!" )
  end

  def get_wallet_by_asset (asset_symbol)
    self.wallets.each do |wallet|
      if (wallet.asset_type == asset_symbol)
        return wallet
      end
    end
    nil
  end

  def ensure_session_token
   self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  private

  def downcase_email
    self.email = email.downcase if email.present?
  end

end
