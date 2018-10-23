class EditColumnsFromPurchases < ActiveRecord::Migration[5.2]
  def change
    remove_column :purchases, :usd_wallet_id
    remove_column :purchases, :usd_amount
    remove_column :purchases, :asset_wallet_id

    add_column :purchases, :cash_id, :integer
    add_column :purchases, :wallet_id, :integer
    add_column :purchases, :cash_amount, :decimal 
  end
end
