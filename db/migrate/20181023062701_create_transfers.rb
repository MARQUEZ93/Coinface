class CreateTransfers < ActiveRecord::Migration[5.2]
  def change
    create_table :transfers do |t|

      t.integer :sender_wallet_address, null: false
      t.integer :receiver_wallet_address, null: false
      t.decimal :amount, null: false

      t.timestamps
    end
  end
end
