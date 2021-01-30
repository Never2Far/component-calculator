class CreatePatterns < ActiveRecord::Migration[6.0]
  def change
    create_table :patterns do |t|
      t.references :color1
      t.references :color2
      t.references :color3
      t.references :color4
      t.references :color5
      t.references :color6
      t.integer :value_id

      t.timestamps
    end
  end
end
