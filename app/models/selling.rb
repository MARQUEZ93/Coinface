class Selling < ApplicationRecord

  belongs_to :wallet, foreign_key: :wallet_id, class_name: :Wallet
  belongs_to :cash, foreign_key: :cash_id, class_name: :Cash

  belongs_to :seller, through: :wallet, source: :user_id

  validates :amount, :cash_amount, :cash_id, :wallet_id, presence: true

end
