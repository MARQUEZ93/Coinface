class AddMiddleNameToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :middleName, :string, null: false 
  end
end
