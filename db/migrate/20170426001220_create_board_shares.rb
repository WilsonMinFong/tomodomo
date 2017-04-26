class CreateBoardShares < ActiveRecord::Migration[5.0]
  def change
    create_table :board_shares do |t|
      t.integer :board_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :board_shares, [:user_id, :board_id], unique: true
    add_index :board_shares, :board_id
  end
end
