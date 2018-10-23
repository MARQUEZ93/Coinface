# == Schema Information
#
# Table name: wallets
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  asset_type :string           not null
#  amount     :decimal(, )
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  address    :string
#

class Wallet < ApplicationRecord

  belongs_to :user, foreign_key: :user_id, class_name: :User
  has_many :sellings, foreign_key: :wallet_id, class_name: :Selling
  has_many :purchases, foreign_key: :wallet_id, class_name: :Purchase

  has_many :transfers, foreign_key: :sender_wallet_address, class_name: :Transfer, primary_key: :address
  has_many :receivers, foreign_key: :receiver_wallet_address, class_name: :Transfer, primary_key: :address

  validates :asset_type, :user_id, :amount, :address, presence: true

end
