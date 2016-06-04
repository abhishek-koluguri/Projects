require 'test_helper.rb'

class DiscussionTest < ActiveSupport::TestCase
  test "the truth" do
    assert true
  end

  setup do
    @discussion = Discussion.new(user: users(:sam), presentation: presentations(:first_presentation), content: discussions(:one))
    @discussion2 = discussions(:two)
  end

  create_required_test_for :user_id, :presentation_id, :title, :content

  test "title is required if it is not a reply to a discussion" do
    @discussion2.reply_to = nil
    assert @discussion2.valid?, "Title must not be filled if not a reply"
  end

  test "title is not required if it is not a reply to a discussion" do
    @discussion2.reply_to = nil
    @discussion2.title = nil
    assert !@discussion2.valid?, "Title must not be blank if not a reply"
  end

  test "title is required if there is a reply to a discussion" do
    assert !@discussion2.valid?, "Title must be blank if a reply"
  end

  test "title is not required if it is a reply to a discussion" do
    @discussion2.title = nil
    assert @discussion2.valid?, "Title must be filled if there is a reply"
  end
end