class AddAssetTypesToTables < ActiveRecord::Migration[5.2]
  def change
    add_column :transfers, :asset_type, :string
    add_column :purchases, :asset_type, :string
    add_column :sellings, :asset_type, :string
  end
end
