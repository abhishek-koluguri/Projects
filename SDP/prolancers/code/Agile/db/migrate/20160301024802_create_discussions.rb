class CreateDiscussions < ActiveRecord::Migration
  def change
    create_table :discussions do |t|
      t.integer :reply_to_id
      t.integer :user_id
      t.integer :presentation_id
      t.text :title
      t.text :content

      t.timestamps
    end
  end
end
