require 'test_helper'

class PresentationsControllerTest < ActionController::TestCase
  setup do
     @presentations = Presentation.all
     @presentation = presentations(:first_presentation)
  end

  test "should get show" do
    get :show, :id => @presentation
    assert_response :success
  end
  
  test "should get not null presentation posts" do
    get :show, id: @presentation 
    assert_not_nil @presentation
  end

end
