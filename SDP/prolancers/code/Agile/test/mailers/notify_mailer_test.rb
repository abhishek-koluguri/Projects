class NotifyMailerTest < ActionMailer::TestCase

  test "test_notify_discussion should send email when discussion poster and author are different" do
    discussion = discussions(:one)
    email = NotifyMailer.notify_discussion(discussion).deliver
    assert_equal email.to , ["ravikiran.kn@gmail.com"]
    assert_equal email.subject , "New discussion posted to your presentation"
    assert_equal email.body.to_s, read_fixture('notify_discussion').join
  end

  test "test_notify_discussion should not send email when discussion poster and author are same" do
    discussion = discussions(:four)
    email = NotifyMailer.notify_discussion(discussion).deliver
    assert_equal email, nil
  end

  test "test_notify_reposne_to_owner should send email when commenter and discussion owner are different" do
    parent_discussion = discussions(:one)
    discussion = discussions(:two)
    email = NotifyMailer.notify_reposne_to_owner(discussion, parent_discussion).deliver
    assert_equal email.to , ["ravikiran.kn1@gmail.com"]
    assert_equal email.subject, "New response posted to your discussion"
    assert_equal email.body.to_s, read_fixture('notify_reposne_to_owner').join
  end

  test "test_notify_reposne_to_owner should not send email when commenter and discussion owner are same" do
    discussion = discussions(:seven)
    parent_discussion = discussions(:eight)
    email = NotifyMailer.notify_reposne_to_owner(discussion, parent_discussion).deliver
    assert_equal email, nil
  end

  test "test_notify_response_to_author should send email if author is not posting the comment" do
    discussion = discussions(:thirteen)
    parent_discussion = discussions(:one)
    email = NotifyMailer.notify_response_to_author(discussion, parent_discussion).deliver
    assert_equal email.to , ["ravikiran.kn@gmail.com"]
    assert_equal email.subject, "New response to a discussion is posted on your presentation"
    assert_equal email.body.to_s, read_fixture('notify_response_to_author').join
  end

  test "test_notify_response_to_author should not send email if author is posting the comment" do
    discussion = discussions(:eight)
    parent_discussion = discussions(:seven)
    email = NotifyMailer.notify_response_to_author(discussion, parent_discussion).deliver
    assert_equal email, nil
  end

  test "send an email to professor" do
    email = NotifyMailer.notify_professor(students(:one)).deliver
    assert_equal email.to , ["sdp.agilelearner@gmail.com"]
    assert_equal email.subject, "A Student has requested your referral"
    assert_equal email.body.to_s, read_fixture('notify_professor').join
  end

  test "send an email to student" do
    email = NotifyMailer.notify_student(students(:one)).deliver
    assert_equal email.to , ["akoluguri@uh.edu"]
    assert_equal email.subject, "Activation Link for Student Membership"
    assert_equal email.body.to_s, read_fixture('notify_student').join
  end

  test "send an email to admin" do
    email = NotifyMailer.notify_admin_student_waiting(students(:one)).deliver
    assert_equal email.to , ["i.mourya1992@gmail.com"]
    assert_equal email.subject, "Student waiting for approval"
    assert_equal email.body.to_s, read_fixture('notify_admin').join
  end

   test "send an email to approved student" do
    email = NotifyMailer.notify_student_approved(students(:two)).deliver
    assert_equal email.to , ["sdp.agilelearner@gmail.com"]
    assert_equal email.subject, "Your student membership has been approved"
    assert_equal email.body.to_s, read_fixture('notify_student_approval').join
  end

     test "send an email to denied student" do
    email = NotifyMailer.notify_student_denied(students(:three)).deliver
    assert_equal email.to , ["ravikiran.kn3@gmail.com"]
    assert_equal email.subject, "Your student membership has been denied"
    assert_equal email.body.to_s, read_fixture('notify_student_denied').join
  end

end