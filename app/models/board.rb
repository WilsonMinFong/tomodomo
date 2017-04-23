# == Schema Information
#
# Table name: boards
#
#  id         :integer          not null, primary key
#  creator_id :integer          not null
#  name       :string           not null
#  private    :boolean          default("true")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Board < ApplicationRecord
  validates :creator, :name, presence: true
  validates :private, inclusion: [true, false]

  belongs_to :creator,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :creator_id

  has_many :lists, dependent: :destroy

  has_many :cards,
    through: :lists,
    source: :cards
end
