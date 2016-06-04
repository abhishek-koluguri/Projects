class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.integer :user_id
      t.string :school_name
      t.text :school_website_address
      t.text :st_school_email
      t.string :prof_name
      t.text :prof_email
      t.text :prof_website_address
      t.string :status
      t.text :denial_reason

      t.timestamps
    end
  end
end
