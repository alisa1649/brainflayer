class Card < ApplicationRecord
  validates :title, presence: true
  validates :deck_id, presence: true
  validates :body, presence: true

    belongs_to :deck,
    foreign_key: :deck_id

end
