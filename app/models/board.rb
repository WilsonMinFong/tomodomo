class Board < ApplicationRecord
  validates :creator, :name, presence: true
  validates :private, inclusion: [true, false]

  belongs_to :creator,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :creator_id

  has_many :lists
end
