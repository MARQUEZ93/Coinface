class User < ApplicationRecord

  validates :email, :password_digest, :session_token, presence: true

  validates :email, uniqueness: true
  #we never keep passwords in db, so allow_nil is needed
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  #redux form will handle password validations

  after_initialize :ensure_session_token, :generate_wallets

  has_many :wallets, foreign_key: :user_id, class_name: :Wallet

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
    #should I change self.id to self.email?
    #difference between after_initialize && after_create??
    Wallet.new(:asset_type => 'BTC', :user_id => self.id)
    Wallet.new(:asset_type => 'BCH', :user_id => self.id)
    Wallet.new(:asset_type => 'ETH', :user_id => self.id)
    Wallet.new(:asset_type => 'ETC', :user_id => self.id)
    Wallet.new(:asset_type => 'LTC', :user_id => self.id)
  end

  def ensure_session_token
   self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
