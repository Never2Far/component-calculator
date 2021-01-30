# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_30_210627) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "colors", force: :cascade do |t|
    t.string "name"
    t.integer "digit"
    t.integer "multiplier"
    t.float "tolerance"
    t.string "tolerance_letter"
    t.integer "temp_coefficient"
    t.string "temp_coefficient_letter"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "components", force: :cascade do |t|
    t.string "name"
    t.string "unit"
    t.integer "pattern_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "patterns", force: :cascade do |t|
    t.integer "band1_color_id"
    t.integer "band2_color_id"
    t.integer "band3_color_id"
    t.integer "band4_color_id"
    t.integer "band5_color_id"
    t.integer "band6_color_id"
    t.integer "value_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "values", force: :cascade do |t|
    t.integer "digit1"
    t.integer "digit2"
    t.integer "digit3"
    t.integer "multiplier"
    t.float "tolerance"
    t.integer "temp_coefficient"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
