class CreateSTribes < ActiveRecord::Migration[7.0]
  def change
    create_table :s_tribes do |t|
      t.string :name
      t.string :code

      t.timestamps
    end
  end
end
