class ChangeConventionModelType < ActiveRecord::Migration[5.2]
  def change
    remove_column :transfers, :modelType
    remove_column :sellings, :modelType
    remove_column :purchases, :modelType

    add_column :transfers, :model_type, :string, :default => "transfer"
    add_column :sellings, :model_type, :string, :default => "selling"
    add_column :purchases, :model_type, :string, :default => "purchase"
  end
end
