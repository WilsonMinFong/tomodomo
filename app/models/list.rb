# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  board_id   :integer          not null
#  order      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord
  validates :name, :board, :order, presence: true

  belongs_to :board

  has_one :creator,
    through: :board,
    source: :creator

  # List.where(board_id: 16).count
end
