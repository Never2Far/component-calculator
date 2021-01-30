class CreateValues < ActiveRecord::Migration[6.0]
  def change
    create_table :values do |t|
      t.integer :digit1
      t.integer :digit2
      t.integer :digit3
      t.integer :multiplier
      t.floattemp_coefficient :tolerance

      t.timestamps
    end
  end
end
