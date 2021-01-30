class CreatePatterns < ActiveRecord::Migration[6.0]
  def change
    create_table :patterns do |t|
      t.integer :band1_color_id
      t.integer :band2_color_id
      t.integer :band3_color_id
      t.integer :band4_color_id
      t.integer :band5_color_id
      t.integer :band6_color_id
      t.integer :value_id

      t.timestamps
    end
  end
end
