class CreateDecks < ActiveRecord::Migration[5.2]
  def change
    create_table :decks do |t|
      t.string :objective 
      t.string :title, null: false
      t.integer :authorId, null: false
      t.string :icon_url
      
      t.timestamps
    end
  end
end
