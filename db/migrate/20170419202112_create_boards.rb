class CreateBoards < ActiveRecord::Migration[5.0]
  def change
    create_table :boards do |t|
      t.integer :creator_id, null: false
      t.string :name, null: false
      t.boolean :private, default: true

      t.timestamps
    end

    add_index :boards, :creator_id
  end
end
