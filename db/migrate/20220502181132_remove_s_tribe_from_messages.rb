class RemoveSTribeFromMessages < ActiveRecord::Migration[7.0]
  def change
    remove_reference :messages, :s_tribe, null: false, foreign_key: true
  end
end
