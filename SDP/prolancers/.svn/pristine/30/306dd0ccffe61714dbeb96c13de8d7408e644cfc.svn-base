require_relative '../../app/mailers/notify_mailer'

class StudentMembershipsController < ApplicationController
  include ApplicationHelper
  helper :all

  before_action :check_signed_in, only: [:index, :activation, :admin]
  respond_to :html, :json

  def index
     @student = Student.find_by(user_id: session[:user])
  end

  def create
  	@student = Student.new(user_id: params[:user_id].to_i, school_name: params[:student][:school_name], school_website_address: params[:student][:school_website_address], status: 'pending', st_school_email: params[:st_school_email], prof_email: params[:student_1][:prof_email],prof_name: params[:student_1][:prof_name])
  	if @student.save
      if @student.prof_email != ""
        NotifyMailer.notify_professor(@student).deliver
      else
        NotifyMailer.notify_student(@student).deliver
      end
    end
  end

  def activation
    @student = Student.find_by(user_id: session[:user])
    @student.update(status: 'waiting')
    NotifyMailer.notify_admin_student_waiting(@student).deliver
  end

  def not_auth
    @student = Student.find_by(user_id: session[:user])
    @student.update(status: 'rejected', denial_reason: 'malicious_attempt')
  end

  def admin
    @pending = Student.where(:status => 'pending').order('created_at desc')
    @waiting = Student.where(:status => 'waiting').order('created_at desc')
    @approved = Student.where(:status => 'approved').order('created_at desc')
    @rejected = Student.where(:status => 'rejected').order('created_at desc')
  end

  def approve
    @student = Student.find_by(:user_id => params[:user_id])
    @student.update(status: 'approved')
    NotifyMailer.notify_student_approved(@student).deliver
    redirect_to student_memberships_admin_path
  end

  def reject
    @student = Student.find_by(:user_id => params[:user_id])
    @student.update(:status => 'rejected', :denial_reason => params[:denial_reason])
    NotifyMailer.notify_student_denied(@student).deliver
    redirect_to student_memberships_admin_path
  end

  def showreject
    @user_id = params[:user_id]
    @student_id = params[:student_id]
  end

  def verify
  end

end