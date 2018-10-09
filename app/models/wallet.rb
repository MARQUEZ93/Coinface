class Wallet < ApplicationRecord

  belongs_to :user, foreign_key: :user_id, class_name: :User

  validates :asset_type, :user_id, presence: true

  validates :amount, :address, allow_nil: true

  after_initialize :generate_address

  private

  def generate_address
    self.address = SecureRandom.hex(34)
  end
end
