class RenameListsOrderColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :lists, :order, :ord
  end
end
