# == Schema Information
#
# Table name: sellings
#
#  id          :bigint(8)        not null, primary key
#  amount      :decimal(, )      not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  cash_amount :decimal(, )
#  cash_id     :integer          not null
#  wallet_id   :integer          not null
#  asset_type  :string
#  model_type  :string           default("selling")
#

class Selling < ApplicationRecord

  belongs_to :wallet, foreign_key: :wallet_id, class_name: :Wallet
  belongs_to :card, foreign_key: :card_id, class_name: :Card

  has_one :seller, through: :wallet, source: :user

  validates :amount, :cash_amount, :card_id, :wallet_id, presence: true

  after_create :update_selling

  def update_selling
    wallet = Wallet.find_by(id: self.wallet_id)
    cash = Card.find_by(id: self.card_id)

    wallet.transfer(self.amount)
    card.credit(self.cash_amount)
  end



end
