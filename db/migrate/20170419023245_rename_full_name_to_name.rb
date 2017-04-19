class RenameFullNameToName < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :full_name, :name
  end
end
