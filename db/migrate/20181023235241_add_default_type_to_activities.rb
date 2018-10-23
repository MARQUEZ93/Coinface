class AddDefaultTypeToActivities < ActiveRecord::Migration[5.2]
  def change
    add_column :transfers, :type, :string, :default => "transfers"
    add_column :sellings, :type, :string, :default => "sellings"
    add_column :purchases, :type, :string, :default => "purchases"
  end
end
