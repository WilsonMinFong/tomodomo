# == Schema Information
#
# Table name: cards
#
#  id          :integer          not null, primary key
#  list_id     :integer          not null
#  name        :string           not null
#  ord         :integer          not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Card < ApplicationRecord
  validates :name, :ord, :list, presence: true

  belongs_to :list

  has_one :board,
    through: :list,
    source: :board

  has_one :creator,
    through: :board,
    source: :creator
end
