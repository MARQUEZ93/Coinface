class DeleteNullFromNote < ActiveRecord::Migration[5.2]
  def change
    change_column :transfers, :note, :string
  end
end
