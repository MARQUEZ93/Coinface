class DeleteCashFromTransfers < ActiveRecord::Migration[5.2]
  def change
    remove_column :transfers, :cash_id
  end
end
