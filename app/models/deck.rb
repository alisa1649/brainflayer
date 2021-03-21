class Deck < ApplicationRecord
  validates :title, presence: true
  validates :author_id, presence: true
  validates :tag_id, presence: true

  belongs_to :tag
  has_many :cards

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
    
end
