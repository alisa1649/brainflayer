class AddTagIdToDecks < ActiveRecord::Migration[5.2]
  def change
    add_column :decks, :tag_id, :integer
    rename_column :decks, :authorId, :author_id
    add_index :decks, :tag_id
    add_index :decks, :author_id
    add_index :decks, :title
  end
end
