class DeleteCashaddCardTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :cashes

    create_table :cards do |t|
      t.integer :user_id, null: false
      t.string :name, null: false

      t.integer :last_four_digits
      t.string :exp, null: false
      t.integer :cvc, null: false
      t.integer :postal, null: false
      t.string :card_type
      t.integer :number_digest, null: false

      t.timestamps
    end
  end
end
