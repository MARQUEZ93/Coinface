class AddDescriptionToTransfers < ActiveRecord::Migration[5.2]
  def change
    add_column :transfers, :note, :string, null: false
  end
end
