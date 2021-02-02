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
    t.float "multiplier"
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
    t.bigint "color1_id"
    t.bigint "color2_id"
    t.bigint "color3_id"
    t.bigint "color4_id"
    t.bigint "color5_id"
    t.bigint "color6_id"
    t.integer "value_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["color1_id"], name: "index_patterns_on_color1_id"
    t.index ["color2_id"], name: "index_patterns_on_color2_id"
    t.index ["color3_id"], name: "index_patterns_on_color3_id"
    t.index ["color4_id"], name: "index_patterns_on_color4_id"
    t.index ["color5_id"], name: "index_patterns_on_color5_id"
    t.index ["color6_id"], name: "index_patterns_on_color6_id"
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
