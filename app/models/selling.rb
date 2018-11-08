# == Schema Information
#
# Table name: sellings
#
#  id               :bigint(8)        not null, primary key
#  amount           :decimal(, )      not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  cash_amount      :decimal(, )      not null
#  wallet_id        :integer          not null
#  asset_type       :string
#  model_type       :string           default("selling")
#  card_type        :string           not null
#  last_four_digits :integer          not null
#

class Selling < ApplicationRecord

  belongs_to :wallet, foreign_key: :wallet_address, class_name: :Wallet

  has_one :seller, through: :wallet, source: :user

  validates :amount, :cash_amount, :wallet_address, :card_type, :last_four_digits, presence: true

  after_create :update_selling

  def update_selling
    wallet = Wallet.find_by(address: self.wallet_address)

    wallet.transfer(self.amount)
  end



end
