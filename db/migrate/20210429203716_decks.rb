class Decks < ActiveRecord::Migration[5.2]
  def change
    add_column :decks, :tags, :string
  end
end
