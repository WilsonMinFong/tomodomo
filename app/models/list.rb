# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  board_id   :integer          not null
#  ord        :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ApplicationRecord
  validates :name, :board, :ord, presence: true

  before_validation :ensure_ord
  before_update :update_ords!

  belongs_to :board

  has_one :creator,
    through: :board,
    source: :creator

  private

  # add to end of list if not specified or outside range
  def ensure_ord
    next_ord = List.where(board_id: board_id).count
    if ord.nil? || ord < 0 || ord > next_ord
      self.ord = next_ord
    end
  end

  # update other ords of other lists when reordering
  def update_ords!
    old_ord = List.find(id).ord

    return nil if ord == old_ord

    if ord < old_ord
      List.where(
        "board_id = ? AND ord >= ? AND ord < ?",
        board_id,
        ord,
        old_ord
      ).update_all("ord = ord + 1")
    else
      List.where(
        "board_id = ? AND ord > ? AND ord <= ?",
        board_id,
        old_ord,
        ord
      ).update_all("ord = ord - 1")
    end
  end
end
