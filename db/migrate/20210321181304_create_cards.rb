class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :title, null: false
      t.string :body
      t.integer :deck_id, null: false

      t.timestamps
    end
  end
end
