# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_05_08_182714) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bonds", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "s_tribe_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["s_tribe_id"], name: "index_bonds_on_s_tribe_id"
    t.index ["user_id"], name: "index_bonds_on_user_id"
  end

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "author"
    t.bigint "user_id", null: false
    t.boolean "top_five"
    t.boolean "read"
    t.boolean "current"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_books_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "text"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "bond_id", null: false
    t.index ["bond_id"], name: "index_messages_on_bond_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "priorities", force: :cascade do |t|
    t.string "text"
    t.bigint "user_id", null: false
    t.bigint "s_tribe_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["s_tribe_id"], name: "index_priorities_on_s_tribe_id"
    t.index ["user_id"], name: "index_priorities_on_user_id"
  end

  create_table "s_tribes", force: :cascade do |t|
    t.string "name"
    t.string "code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.integer "energy"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "online"
  end

  create_table "worries", force: :cascade do |t|
    t.string "text"
    t.bigint "user_id", null: false
    t.bigint "s_tribe_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["s_tribe_id"], name: "index_worries_on_s_tribe_id"
    t.index ["user_id"], name: "index_worries_on_user_id"
  end

  add_foreign_key "bonds", "s_tribes"
  add_foreign_key "bonds", "users"
  add_foreign_key "books", "users"
  add_foreign_key "messages", "bonds"
  add_foreign_key "messages", "users"
  add_foreign_key "priorities", "s_tribes"
  add_foreign_key "priorities", "users"
  add_foreign_key "worries", "s_tribes"
  add_foreign_key "worries", "users"
end
