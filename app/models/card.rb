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

  before_validation :ensure_ord
  before_create :enforce_next_ord
  before_update :update_ords!
  after_destroy :remove_card_updates!

  belongs_to :list

  has_one :board,
    through: :list,
    source: :board

  has_one :creator,
    through: :board,
    source: :creator

  has_many :comments

  private

  # TODO: refactor into Sortable/Orderable module
  # add to end of card list if not specified or outside range
  def ensure_ord
    next_ord = Card.where(list_id: list_id).count
    if ord.nil? || ord < 0 || ord > next_ord
      self.ord = next_ord
    end
  end

  def enforce_next_ord
    self.ord = Card.where(list_id: list_id).count
  end

  def update_ords!
    old_card = Card.find(id)

    if old_card.list == list
      shift_ords_within!
    else
      remove_card_updates!(old_card)
      add_card_updates!(self)
    end
  end

  # update other ords of other cards when reordering in same list
  def shift_ords_within!
    old_ord = Card.find(id).ord

    return nil if ord == old_ord

    if ord < old_ord
      Card.where(
        "list_id = ? AND ord >= ? AND ord < ?",
        list_id,
        ord,
        old_ord
      ).update_all("ord = ord + 1")
    else
      Card.where(
        "list_id = ? AND ord > ? AND ord <= ?",
        list_id,
        old_ord,
        ord
      ).update_all("ord = ord - 1")
    end
  end

  # shift higher ords down to fill spot of deleted card
  def remove_card_updates!(card = self)
    Card.where(
    "list_id = ? AND ord > ?",
    card.list_id,
    card.ord
    ).update_all("ord = ord - 1")
  end

  def add_card_updates!(card)
    Card.where(
    "list_id = ? AND ord >= ?",
    card.list_id,
    card.ord
    ).update_all("ord = ord + 1")
  end
end
