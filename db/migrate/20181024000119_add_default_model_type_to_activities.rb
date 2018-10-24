class AddDefaultModelTypeToActivities < ActiveRecord::Migration[5.2]
  def change
    add_column :transfers, :modelType, :string, :default => "transfer"
    add_column :sellings, :modelType, :string, :default => "selling"
    add_column :purchases, :modelType, :string, :default => "purchase"
  end
end
