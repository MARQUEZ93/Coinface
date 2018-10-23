class EditTransfersToString < ActiveRecord::Migration[5.2]
  def change
    change_column :transfers, :sender_wallet_address, :string
    change_column :transfers, :receiver_wallet_address, :string
  end
end
