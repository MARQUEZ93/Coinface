class AddCashAmountToTransfers < ActiveRecord::Migration[5.2]
  def change
    add_column :transfers, :cash_amount, :decimal
  end
end
