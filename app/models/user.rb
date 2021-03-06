# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  name            :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :name, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :boards,
    class_name: 'Board',
    primary_key: :id,
    foreign_key: :creator_id

  has_many :lists,
    through: :boards,
    source: :lists

  has_many :cards,
    through: :lists,
    source: :cards

  has_many :board_shares

  has_many :shared_boards,
    through: :board_shares,
    source: :board

  has_many :comments,
    class_name: 'Comment',
    primary_key: :id,
    foreign_key: :author_id

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    return user if user && user.is_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    save!
    session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def find_accessible_board_by_id(board_id)
    accessible_boards.find do |board|
      board.id == board_id
    end
  end

  def accessible_boards
    boards.all + shared_boards.all
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
