require 'test_helper'

class StudentMembershipsControllerTest < ActionController::TestCase

  test "should get index if logged in" do
    session[:user] = users(:Abhi)
    get :index
    assert_response :success
  end

  test "user should be redirected to signin page if not logged in" do
    get :index, format: :js
    assert_equal 'Please Signin!', assigns(:error)
    assert_equal '/signin', assigns(:forward_page)
    assert_template 'signin/show_signin.js'
  end

  test "should create a student and send email to professor" do
    student = students(:one)
    assert_difference('Student.count') do
      post  :create, user_id: users(:Ravi), student: {school_name: student.school_name, school_website_address: student.school_website_address }, student_1: {prof_email: student.prof_email}
    end
    email = ActionMailer::Base.deliveries.last
    assert_equal email.to , ["sdp.agilelearner@gmail.com"]
    assert_equal email.subject , "A Student has requested your referral"
  end

  test "should create a student and send email to student" do
    student = students(:one)
    assert_difference('Student.count') do
      post  :create, user_id: users(:Ravi), student: {school_name: student.school_name, school_website_address: student.school_website_address}, student_1: {prof_email: ""}, st_school_email: student.st_school_email
    end
    email = ActionMailer::Base.deliveries.last
    assert_equal email.to , ["akoluguri@uh.edu"]
    assert_equal email.subject , "Activation Link for Student Membership"
  end

  test "status should be updated once the user visits the activation page" do
    session[:user] = users(:Abhi)
    get :activation
    assert_equal "waiting", assigns(:student).status
  end

  test "status should be updated once the user visits the not_auth page" do
    session[:user] = users(:Abhi)
    get :not_auth
    assert_equal "rejected", assigns(:student).status
  end
  
  test "admin should be redirected to signin page if not logged in" do
    get :admin, format: :js
    assert_equal 'Please Signin!', assigns(:error)
    assert_equal '/signin', assigns(:forward_page)
    assert_template 'signin/show_signin.js'
  end

  test "get admin page if signed in" do
    session[:user] = users(:Abhi)
    get :admin
    assert_response :success
  end

  test "clicking reject calls showreject" do
    get :showreject, student_id = '113629430', user_id: users(:Abhi)
    assert_response :success
  end

  test "specified student's status should be updated once the admin approves" do
    post  :approve, user_id: users(:Abhi)
    assert_equal "approved", assigns(:student).status
  end

  test "specified student's status and denial reason should be updated once the admin approves" do
    post  :reject, user_id: users(:Abhi), denial_reason: "Not validated by your professor"
    assert_equal "rejected", assigns(:student).status
    assert_equal "Not validated by your professor", assigns(:student).denial_reason
  end

end
