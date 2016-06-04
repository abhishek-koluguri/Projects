class Presentation < ActiveRecord::Base
  has_many :discussions
  belongs_to :user
  validates_presence_of :user
end
