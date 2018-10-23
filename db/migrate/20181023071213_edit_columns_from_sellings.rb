class EditColumnsFromSellings < ActiveRecord::Migration[5.2]
  def change
    remove_column :sellings, :usd_wallet_id
    remove_column :sellings, :usd_amount
    remove_column :sellings, :asset_wallet_id

    add_column :sellings, :cash_id, :integer
    add_column :sellings, :wallet_id, :integer
    add_column :sellings, :cash_amount, :decimal
  end
end
