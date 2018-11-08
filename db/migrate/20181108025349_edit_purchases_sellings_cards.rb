class EditPurchasesSellingsCards < ActiveRecord::Migration[5.2]
  def change
    remove_column :sellings, :card_id
    remove_column :purchases, :card_id

    add_column :sellings, :card_type, :string, null: false
    add_column :purchases, :card_type, :string, null: false
    add_column :sellings, :last_four_digits, :integer, null: false
    add_column :purchases, :last_four_digits, :integer, null: false
  end
end
