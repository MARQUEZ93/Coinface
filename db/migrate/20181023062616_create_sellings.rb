class CreateSellings < ActiveRecord::Migration[5.2]
  def change
    create_table :sellings do |t|
      t.integer :asset_wallet_id, null: false
      t.integer :usd_wallet_id, null: false
      t.decimal :amount, null: false
      t.string :usd_amount, null: false

      t.timestamps
    end
  end
end
