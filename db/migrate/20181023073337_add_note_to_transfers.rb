class AddNoteToTransfers < ActiveRecord::Migration[5.2]
  def change
    add_column :transfers, :cash_id, :integer

    remove_column :purchases, :cash_id
    remove_column :purchases, :wallet_id

    add_column :purchases, :cash_id, :integer, null: false
    add_column :purchases, :wallet_id, :integer, null: false

    remove_column :sellings, :cash_id
    remove_column :sellings, :wallet_id

    add_column :sellings, :cash_id, :integer, null: false
    add_column :sellings, :wallet_id, :integer, null: false

  end
end
