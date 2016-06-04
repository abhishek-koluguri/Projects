ENV["RAILS_ENV"] ||= "test"
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

class ActiveSupport::TestCase
  ActiveRecord::Migration.check_pending!

 
  fixtures :all

  # :nocov:
  def self.create_required_test_for(*fields)
    test_instance_name = self.name.sub('Test', '').tableize.singularize

    self.class_eval do
      attr_reader test_instance_name.to_sym
    end

    fields.each do |field|
      self.class_eval do
        ['', nil].each do |value|
          test "#{field.to_s} is not #{value == nil ? 'nil' : 'blank'}" do
            instance = self.send(test_instance_name)
            instance.send("#{field}=", value)
            assert !instance.valid?
            assert_equal "#{field.to_s.humanize} can't be blank", instance.errors.full_messages_for(field)[0]
          end
        end
      end

    end
  end
  # :nocov:
end
