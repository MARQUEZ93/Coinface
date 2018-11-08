class ChangeIdToAddress < ActiveRecord::Migration[5.2]
  def change
    remove_column :sellings, :wallet_id
    remove_column :purchases, :wallet_id

    add_column :sellings, :wallet_address, :string, null: false
    add_column :purchases, :wallet_address, :string, null: false 
  end
end
