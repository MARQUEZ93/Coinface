class AddCashAmountNullFalse < ActiveRecord::Migration[5.2]
  def change
    change_column :transfers, :cash_amount, :decimal, null: false
    change_column :sellings, :cash_amount, :decimal, null: false
    change_column :purchases, :cash_amount, :decimal, null: false
  end
end
