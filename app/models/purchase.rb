# == Schema Information
#
# Table name: purchases
#
#  id               :bigint(8)        not null, primary key
#  amount           :decimal(, )      not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  cash_amount      :decimal(, )      not null
#  asset_type       :string
#  model_type       :string           default("purchase")
#  card_type        :string           not null
#  last_four_digits :integer          not null
#  wallet_address   :string           not null
#

class Purchase < ApplicationRecord

  belongs_to :wallet, foreign_key: :wallet_address, class_name: :Wallet, primary_key: :address

  has_one :purchaser, through: :wallet, source: :user

  validates :amount, :cash_amount, :card_type, :last_four_digits, :wallet_address, presence: true

  after_create :update_purchase

  def update_purchase
    wallet = Wallet.find_by(address: self.wallet_address)

    wallet.receive(self.amount)

  end

end
