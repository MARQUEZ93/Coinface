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
#

class User < ApplicationRecord

  validates :email, :password_digest, :session_token, :firstName, :middleName, :lastName, presence: true

  validates :email, uniqueness: true
  #we never keep passwords in db, so allow_nil is needed
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  #redux form will handle password validations

  after_initialize :ensure_session_token
  after_create :generate_wallets

  has_many :wallets, foreign_key: :user_id, class_name: :Wallet
  has_one :cash, foreign_key: :user_id, class_name: :Cash

  has_many :transfers, through: :wallets, source: :transfers
  has_many :receivers, through: :wallets, source: :receivers

  has_many :sellings, through: :wallets, source: :sellings
  has_many :purchases, through: :wallets, source: :purchases

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
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

  def generate_wallets
    btc = Wallet.new(:asset_type => 'BTC', :user_id => self.id, :amount => 0.00, :address => SecureRandom.hex(34))
    bch = Wallet.new(:asset_type => 'BCH', :user_id => self.id, :amount => 0.00, :address => SecureRandom.hex(34))
    eth = Wallet.new(:asset_type => 'ETH', :user_id => self.id, :amount => 0.00, :address => SecureRandom.hex(34))
    etc = Wallet.new(:asset_type => 'ETC', :user_id => self.id, :amount => 0.00, :address => SecureRandom.hex(34))
    ltc = Wallet.new(:asset_type => 'LTC', :user_id => self.id, :amount => 0.00, :address => SecureRandom.hex(34))
    usd = Cash.new(:user_id => self.id, :amount => 0.00)

    btc.save!
    bch.save!
    eth.save!
    etc.save!
    ltc.save!
    usd.save!
  end

  def ensure_session_token
   self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
