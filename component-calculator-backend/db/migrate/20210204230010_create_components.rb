class CreateComponents < ActiveRecord::Migration[6.0]
  def change
    create_table :components do |t|
      t.string :name
      t.float :value
      t.integer :band_count
      t.string :color_code
      t.string :base_unit
      t.string :value_display
    end
  end
end
