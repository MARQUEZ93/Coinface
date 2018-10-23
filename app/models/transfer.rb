class Transfer < ApplicationRecord

  belongs_to :receiver_wallet, foreign_key: :receiver_wallet_address, class_name: :Wallet
  belongs_to :sender_wallet, foreign_key: :sender_wallet_address, class_name: :Wallet

  belongs_to :sender, foreign_key: :sender_wallet, source: :user_id
  belongs_to :receiver, foreign_key: :receiver_wallet, source: :user_id

  validates :receiver_wallet_address, :sender_wallet_address, :amount, presence: true

end
