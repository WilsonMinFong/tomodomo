class AddCompletedStatusToCards < ActiveRecord::Migration[5.0]
  def change
    add_column :cards, :completed, :boolean, default: false
  end
end
