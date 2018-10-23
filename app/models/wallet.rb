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

  validates :asset_type, :user_id, :amount, :address, presence: true

end
