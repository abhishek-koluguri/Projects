require 'test_helper'

class DiscussionsControllerTest < ActionController::TestCase

  test "show get success" do
    @presentation = presentations(:fourth_presentation)
    get :show , id:@presentation
    assert_response :success
  end

  test "show where presentation contains 0 discussions" do
    @presentation = presentations(:fourth_presentation)
    get :show , id:@presentation
    assert_equal 0, assigns(:discussions_hash).size
  end

  test "show where presentation contains 1 discussion and 0 comments" do
    @presentation = presentations(:fifth_presentation)
    get :show , id:@presentation
    discussion_hash = assigns(:discussions_hash)
    assert_equal 1, discussion_hash.size
    discussion_id , discussion = discussion_hash.first
    assert_equal "What is a facade", discussion[0].title
    assert_equal "Can some one exmplain it with a nice example ?", discussion[0].content
  end

  test "show where presentation contains 1 discussion and 1 comment" do
    @presentation = presentations(:sixth_presentation)
    get :show , id:@presentation
    discussion_hash = assigns(:discussions_hash)
    assert_equal 1, discussion_hash.size
    discussion_id , discussion = discussion_hash.first
    assert_equal 2, discussion.size
    assert_equal "Discussion 1 on ecapsulation", discussion[0].title
    assert_equal "Comment 1 on discussion 1 on encapsulation", discussion[1].content
  end

  test "show where presentation contains 2 discussion, 1 comment in first discussion and 2 comments in second discussion" do
    @presentation = presentations(:seventh_presentation)
    get :show , id:@presentation
    discussion_hash = assigns(:discussions_hash)
    assert_equal 2, discussion_hash.size

    discussion_id_1 , discussion_1 = discussion_hash.first
    discussion_id_2 , discussion_2 = discussion_hash.to_a.last

    assert_equal 2, discussion_1.size
    assert_equal "Discussion 1 on perils of inheritance", discussion_1[0].title
    assert_equal "Comment 1 on discussion 1 on perils of inheritance", discussion_1[1].content

    assert_equal 3, discussion_2.size
    assert_equal "Discussion 2 on perils of inheritance", discussion_2[0].title
    assert_equal "Comment 2 on discussion 2 on perils of inheritance", discussion_2[1].content
    assert_equal "Comment 1 on discussion 2 on perils of inheritance", discussion_2[2].content
  end

  test "new discussion should be added to the appropriate presentation" do
    session[:user] = "Abhi"
    get :new, presentation_id: presentations(:ninth_presentation), format: :js
    assert_not_nil assigns(:presentation_id)
  end

  test "user should be redirected to the same page after login if user's request is of html format" do
    get :create, user_id: nil, presentation_id: presentations(:eighth_presentation), reply_to_id: nil, discussion: {title: 'Discussion 1 on ruby on rails', content: "This is some conent.."}
    assert_equal request.url, session[:referer]
  end

  test "create discussion should ask user to log in if not already logged in" do
    get :create, user_id: nil, presentation_id: presentations(:eighth_presentation), reply_to_id: nil, discussion: {title: 'Discussion 1 on ruby on rails', content: "This is some conent.."}, format: :js
    assert_equal 'Please Signin!', assigns(:error)
    assert_equal '/signin', assigns(:forward_page)
    assert_template 'signin/show_signin.js'
  end

  test "email is not sent to the author of presentation when he posts a discussion on his own presentation" do
    session[:user] = users(:Ravi)
    assert_no_difference 'ActionMailer::Base.deliveries.size' do
      post :create, user_id: users(:Ravi), presentation_id: presentations(:fifth_presentation), reply_to_id: nil, discussion: {title: 'Discussion 1 on presentation 5', content: "This is some conent.."}
    end
  end

  test "email is sent to the author of presentation when a user posts discussion on his presentation" do
    session[:user] = users(:Abhi)
    assert_difference 'ActionMailer::Base.deliveries.size', +1 do
      post :create, user_id: users(:Abhi), presentation_id: presentations(:third_presentation), reply_to_id: nil, discussion: {title: 'Discussion 1 on presentation 5', content: "This is some conent.."}
    end
    email = ActionMailer::Base.deliveries.last
    assert_equal email.to , ["sdp.agilelearner@gmail.com"]
    assert_equal email.subject , "New discussion posted to your presentation"
  end

  test "should be able to add a discussion to presentation, when " do
    session[:user] = users(:Ravi)
    assert_difference('Discussion.count') do
      post :create, user_id: users(:Ravi), presentation_id: presentations(:eighth_presentation), reply_to_id: nil, discussion: {title: 'Discussion 1 on ruby on rails', content: "This is some conent.."}
    end
  end

  test "get reply should be success" do
    session[:user] = users(:Ravi)
    assert_no_difference('Discussion.count') do
      get :reply, presentation_id: presentations(:eighth_presentation), discussion_id: discussions(:eleven)
    end
  end

  test "post reply should ask user to log in if not already logged in" do
    post :post_reply, user_id: users(:Ravi), presentation_id: presentations(:eighth_presentation), discussion_id: discussions(:twelve), discussion: {content: "This is a reply to discussion 2.."}, format: :js
    assert_equal 'Please Signin!', assigns(:error)
    assert_equal '/signin', assigns(:forward_page)
    assert_template 'signin/show_signin.js'
  end

  test "post reply should add a comment to the discussion" do
    session[:user] = users(:Ravi)
    assert_difference('Discussion.count') do
      post :post_reply, user_id: users(:Ravi), presentation_id: presentations(:eighth_presentation), discussion_id: discussions(:twelve), discussion: {content: "This is a reply to discussion 2.."}
    end
  end

  test "email is not sent to the author of presentation when he comments on a discussion of his own presentation" do
    session[:user] = users(:Ravi)
    assert_difference 'ActionMailer::Base.deliveries.size', 1 do
      post :post_reply, user_id: users(:Ravi), presentation_id: presentations(:tenth_presentation), discussion_id: discussions(:fifteen), discussion: {content: "This is a reply to discussion 1.."}
    end
    email = ActionMailer::Base.deliveries.last
    assert_not_equal email.to, ["sdp.agilelearner@gmail.com"]
    assert_not_equal email.subject , "New response to a discussion is posted on your presentation"
  end

  test "email is not sent at all if owner, author and commenter are all same" do
    session[:user] = users(:Ravi)
    assert_no_difference 'ActionMailer::Base.deliveries.size' do
      post :post_reply, user_id: users(:Ravi), presentation_id: presentations(:tenth_presentation), discussion_id: discussions(:sixteen), discussion: {content: "This is a reply to discussion 2.."}
    end
  end

  test "email is sent to the author of presentation when a user comments on a discussion of his presentation" do
    session[:user] = users(:marge)
    assert_difference 'ActionMailer::Base.deliveries.size', 2 do
      post :post_reply, user_id: users(:marge), presentation_id: presentations(:tenth_presentation), discussion_id: discussions(:sixteen), discussion: {content: "This is a reply to discussion 2.."}
    end

    email_owner = ActionMailer::Base.deliveries.first
    assert_equal email_owner.to , ["i.mourya1992@gmail.com"]
    assert_equal email_owner.subject , "New response posted to your discussion"

    email_author = ActionMailer::Base.deliveries.last
    assert_equal email_author.to , ["sdp.agilelearner@gmail.com"]
    assert_equal email_author.subject , "New response to a discussion is posted on your presentation"
  end


end