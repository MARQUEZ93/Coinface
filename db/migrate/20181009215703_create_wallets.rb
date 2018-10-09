class CreateWallets < ActiveRecord::Migration[5.2]
  def change
    create_table :wallets do |t|
      t.integer :user_id, null: false
      t.string :asset_type, null: false
      t.decimal :amount, null: true

      t.timestamps
    end
    add_index :wallets, :user_id
  end
end
