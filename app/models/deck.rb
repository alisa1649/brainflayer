class Deck < ApplicationRecord
  validates :title, presence: true
  validates :author_id, presence: true

  has_many :cards

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
    
end
