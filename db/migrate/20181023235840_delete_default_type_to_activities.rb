class DeleteDefaultTypeToActivities < ActiveRecord::Migration[5.2]
  def change
    remove_column :transfers, :type
    remove_column :sellings, :type
    remove_column :purchases, :type
  end
end
