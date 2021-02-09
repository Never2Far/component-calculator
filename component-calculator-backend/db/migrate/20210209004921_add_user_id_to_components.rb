class AddUserIdToComponents < ActiveRecord::Migration[6.0]
  def change
    add_column :components, :user_id, :integer, null: true
  end
end
