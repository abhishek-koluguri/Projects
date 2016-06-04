class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.date :completion_date
      t.boolean :pending

      t.timestamps null: false
    end
    
    Task.create(name: 'task1', completion_date: DateTime.parse('2015/12/31'), pending: true)
    Task.create(name: 'task2', completion_date: DateTime.parse('2015/12/31'), pending: true)
    Task.create(name: 'task3', completion_date: DateTime.parse('2015/12/31'), pending: true)
  end
end
