class NotifyMailer < ActionMailer::Base
  default :from => "noreply@uh.edu"

  def notify_discussion(discussion)
    @discussion = discussion
    if discussion.user.email != discussion.presentation.user.email
      mail(:to => discussion.presentation.user.email, :subject => "New discussion posted to your presentation", template_path: 'notify_mailer', template_name: 'notify_discussion_mail_to_author')
    end
  end

  def notify_reposne_to_owner(discussion, parent_discussion)
    @discussion = discussion
    if parent_discussion != nil && parent_discussion.user != nil && parent_discussion.user.email != discussion.user.email
      mail(:to => parent_discussion.user.email, :subject => "New response posted to your discussion", template_path: 'notify_mailer', template_name: 'notify_response_email_owner')
    end
  end

  def notify_response_to_author(discussion, parent_discussion)
    @discussion = discussion
    if parent_discussion != nil && parent_discussion.user != nil && discussion.user.email != parent_discussion.presentation.user.email
      mail(:to => discussion.presentation.user.email, :subject => "New response to a discussion is posted on your presentation", template_path: 'notify_mailer', template_name: 'notify_response_email_to_author')
    end
  end

  def notify_professor(student)
    @student = student
    mail(:to => student.prof_email, :subject => "A Student has requested your referral", template_path: 'notify_mailer', template_name: 'email_professor')
  end

  def notify_student(student)
    @student = student
    mail(:to => student.st_school_email, :subject => "Activation Link for Student Membership", template_path: 'notify_mailer', template_name: 'email_student')
  end

  def notify_student_approved(student)
    @student = student
    mail(:to => student.user.email, :subject => "Your student membership has been approved", template_path: 'notify_mailer', template_name: 'notify_student_approved')
  end

  def notify_student_denied(student)
    @student = student
    mail(:to => student.user.email, :subject => "Your student membership has been denied", template_path: 'notify_mailer', template_name: 'notify_student_denied')
  end

  def notify_admin_student_waiting(student)
    @student = student
    mail(:to => student.user.email, :subject => "Student waiting for approval", template_path: 'notify_mailer', template_name: 'notify_admin_student_waiting')
  end

end