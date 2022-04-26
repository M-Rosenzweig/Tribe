class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.references :user, null: false, foreign_key: true
      t.boolean :top_five
      t.boolean :read
      t.boolean :current

      t.timestamps
    end
  end
end
