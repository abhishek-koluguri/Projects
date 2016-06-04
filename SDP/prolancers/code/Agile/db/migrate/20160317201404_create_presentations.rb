class CreatePresentations < ActiveRecord::Migration
  def change
    create_table :presentations do |t|
      t.string :presentation_title
      t.string :presentation_email
      t.integer :user_id
      t.timestamps
    end
  end
end
