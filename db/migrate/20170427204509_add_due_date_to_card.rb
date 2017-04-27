class AddDueDateToCard < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :due_date, :datetime
  end
end
