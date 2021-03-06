class CreateLists < ActiveRecord::Migration[5.0]
  def change
    create_table :lists do |t|
      t.string :name, null: false
      t.integer :board_id, null: false
      t.integer :order, null: false
      t.timestamps
    end

    add_index :lists, :board_id
  end
end
