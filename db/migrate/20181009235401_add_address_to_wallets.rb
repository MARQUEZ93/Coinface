class AddAddressToWallets < ActiveRecord::Migration[5.2]
  def change
    add_column :wallets, :address, :string, null: true
  end
end
