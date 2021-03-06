# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_11_08_043155) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "name", null: false
    t.integer "last_four_digits"
    t.string "exp", null: false
    t.integer "cvc", null: false
    t.integer "postal", null: false
    t.string "card_type"
    t.integer "number_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "purchases", force: :cascade do |t|
    t.decimal "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "cash_amount", null: false
    t.string "asset_type"
    t.string "model_type", default: "purchase"
    t.string "card_type", null: false
    t.integer "last_four_digits", null: false
    t.string "wallet_address", null: false
  end

  create_table "sellings", force: :cascade do |t|
    t.decimal "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "cash_amount", null: false
    t.string "asset_type"
    t.string "model_type", default: "selling"
    t.string "card_type", null: false
    t.integer "last_four_digits", null: false
    t.string "wallet_address", null: false
  end

  create_table "transfers", force: :cascade do |t|
    t.string "sender_wallet_address", null: false
    t.string "receiver_wallet_address", null: false
    t.decimal "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "cash_amount", null: false
    t.string "asset_type"
    t.string "model_type", default: "transfer"
    t.string "note", null: false
    t.index ["receiver_wallet_address"], name: "index_transfers_on_receiver_wallet_address"
    t.index ["sender_wallet_address"], name: "index_transfers_on_sender_wallet_address"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "firstName", null: false
    t.string "lastName", null: false
    t.string "middleName", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "wallets", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "asset_type", null: false
    t.decimal "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "address"
    t.index ["user_id"], name: "index_wallets_on_user_id"
  end

end
