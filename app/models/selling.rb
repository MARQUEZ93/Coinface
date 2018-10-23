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
#

class Selling < ApplicationRecord

  belongs_to :wallet, foreign_key: :wallet_id, class_name: :Wallet
  belongs_to :cash, foreign_key: :cash_id, class_name: :Cash

  has_one :seller, through: :wallet, source: :user

  validates :amount, :cash_amount, :cash_id, :wallet_id, presence: true

end
