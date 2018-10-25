class AddNameToUsersChangeConvention < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :first_name
    remove_column :users, :last_name

    add_column :users, :firstName, :string, null: false
    add_column :users, :lastName, :string, null: false
  end
end
