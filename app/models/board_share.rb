# == Schema Information
#
# Table name: board_shares
#
#  id         :integer          not null, primary key
#  board_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BoardShare < ApplicationRecord
  validates :user, :board, presence: true
  validates :user, uniqueness: { scope: :board }
  validate :ensure_not_creator

  belongs_to :user
  belongs_to :board

  private

  def ensure_not_creator
    if user == board.creator
      errors.add(:user, "can't be creator")
    end
  end
end
