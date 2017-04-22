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

require 'test_helper'

class BoardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
