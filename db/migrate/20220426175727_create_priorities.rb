class CreatePriorities < ActiveRecord::Migration[7.0]
  def change
    create_table :priorities do |t|
      t.string :text
      t.references :user, null: false, foreign_key: true
      t.references :s_tribe, null: false, foreign_key: true


      t.timestamps
    end
  end
end
