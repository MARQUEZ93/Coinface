class ChangeCashIdToCardId < ActiveRecord::Migration[5.2]
  def change
    remove_column :sellings, :cash_id
    remove_column :purchases, :cash_id

    add_column :sellings, :card_id, :integer, null: false 
    add_column :purchases, :card_id, :integer, null: false
  end
end
