class List < ApplicationRecord
  validates :name, :board, :order, presence: true

  belongs_to :board

  has_one :creator,
    through: :board,
    source: :creator
end
