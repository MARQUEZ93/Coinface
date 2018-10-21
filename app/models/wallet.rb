class Wallet < ApplicationRecord

  belongs_to :user, foreign_key: :user_id, class_name: :User

  validates :asset_type, :user_id, :amount, :address, presence: true

end
