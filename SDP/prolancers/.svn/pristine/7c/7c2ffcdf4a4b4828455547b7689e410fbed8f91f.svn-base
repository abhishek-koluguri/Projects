require_relative '../../app/mailers/notify_mailer'
class DiscussionsController < ApplicationController
  include ApplicationHelper
  helper :all

  before_action :check_signed_in, only: [:create, :post_reply, :new, :reply]
  respond_to :html, :json

  def show
    @discussions = Discussion.where(:presentation_id => params[:id]).order('reply_to_id asc, created_at desc')
    @presentation_id = params[:id]
    @discussions_hash = Hash.new
    @discussions.each do |discussion|
      if discussion.reply_to_id == nil || discussion.reply_to_id == ''
        discussion_array = []
        discussion_array.push(discussion)
        @discussions_hash[discussion.id] = discussion_array
      else
        discussion_array = @discussions_hash[discussion.reply_to_id]
        discussion_array.push(discussion)
        @discussions_hash[discussion.reply_to_id] = discussion_array
      end
    end
  end

  def create
    @discussion = Discussion.new(user_id: params[:user_id].to_i, presentation_id: params[:presentation_id].to_i, content:params[:discussion][:content], reply_to_id:nil, title: params[:discussion][:title])
    if @discussion.save
      NotifyMailer.notify_discussion(@discussion).deliver
      params[:id] = params[:presentation_id]
      show()
    end
  end

  def new
    @presentation_id = params[:presentation_id]
  end

  def reply
    @presentation_id = params[:presentation_id]
    @discussion_id = params[:discussion_id]
  end

  def post_reply
    @discussion = Discussion.new(user_id: params[:user_id].to_i, presentation_id: params[:presentation_id].to_i, content:params[:discussion][:content], reply_to_id:params[:discussion_id].to_i, title: '')
    if @discussion.save
      NotifyMailer.notify_reposne_to_owner(@discussion, Discussion.find(params[:discussion_id].to_i)).deliver
      NotifyMailer.notify_response_to_author(@discussion, Discussion.find(params[:discussion_id].to_i)).deliver
      params[:id] = params[:presentation_id]
      show()
    end
  end

end
