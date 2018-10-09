class User < ApplicationRecord

  attr_reader :password

  validates :first_name, :last_name, :email, :password_digest, :session_token, presence: true

  validates :email, uniqueness: true

  validates :password, allow_nil: true

  #redux form will handle password validations

  after_initialize :ensure_session_token, :create_wallets

  has_many :wallets, foreign_key: :user_id, class_name: :Wallet

  def self.find_by_credentials(username, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(passowrd) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def generate_wallets
    #should I change self.id to self.email?
    #difference between after_initialize && after_create??
    Wallet.new("BTC", self.id)
    Wallet.new("BCH", self.id)
    Wallet.new("ETH", self.id)
    Wallet.new("ETC", self.id)
    Wallet.new("LTC", self.id)
  end

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_sesson_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_sesson_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end
