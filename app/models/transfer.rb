# == Schema Information
#
# Table name: transfers
#
#  id                      :bigint(8)        not null, primary key
#  sender_wallet_address   :string           not null
#  receiver_wallet_address :string           not null
#  amount                  :decimal(, )      not null
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  cash_amount             :decimal(, )
#  asset_type              :string
#  model_type              :string           default("transfer")
#

class Transfer < ApplicationRecord

  belongs_to :receiver_wallet, foreign_key: :receiver_wallet_address, class_name: :Wallet, primary_key: :address
  belongs_to :sender_wallet, foreign_key: :sender_wallet_address, class_name: :Wallet, primary_key: :address

  has_one :sender, through: :sender_wallet, source: :user
  has_one :receiver, through: :receiver_wallet, source: :user

  validates :receiver_wallet_address, :sender_wallet_address, :amount, presence: true

end
