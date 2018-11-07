# == Schema Information
#
# Table name: purchases
#
#  id          :bigint(8)        not null, primary key
#  amount      :decimal(, )      not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  cash_amount :decimal(, )
#  cash_id     :integer          not null
#  wallet_id   :integer          not null
#  asset_type  :string
#  model_type  :string           default("purchase")
#

class Purchase < ApplicationRecord

  belongs_to :wallet, foreign_key: :wallet_id, class_name: :Wallet
  belongs_to :card, foreign_key: :card_id, class_name: :Card

  has_one :purchaser, through: :wallet, source: :user

  validates :amount, :cash_amount, :card_id, :wallet_id, presence: true

  after_create :update_purchase

  def update_purchase
    wallet = Wallet.find_by(id: self.wallet_id)
    card = Card.find_by(id: self.card_id)

    wallet.receive(self.amount)
    card.debit(self.cash_amount)
  end

end
