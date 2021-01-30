class CreateComponents < ActiveRecord::Migration[6.0]
  def change
    create_table :components do |t|
      t.string :name
      t.string :unit
      t.integer :pattern_id

      t.timestamps
    end
  end
end
