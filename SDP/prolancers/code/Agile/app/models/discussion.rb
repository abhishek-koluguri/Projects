class Discussion < ActiveRecord::Base
  belongs_to :user
  belongs_to :presentation
  belongs_to :reply_to, :class_name => 'Discussion'
  has_many :children, :class_name => 'Discussion', :foreign_key => 'reply_to_id'

  validates_presence_of :user_id, :presentation_id, :content
  validates_presence_of :title, unless: :reply_to_id?
  validates_absence_of :title, if: :reply_to_id?
end