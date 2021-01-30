class CreateColors < ActiveRecord::Migration[6.0]
  def change
    create_table :colors do |t|
      t.string :name
      t.integer :digit
      t.integer :multiplier
      t.float :tolerance
      t.string :tolerance_letter
      t.integer :temp_coefficient
      t.string :temp_coefficient_letter

      t.timestamps
    end
  end
end
