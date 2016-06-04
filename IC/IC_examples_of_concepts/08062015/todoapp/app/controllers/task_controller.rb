class TaskController < ApplicationController
  def index
    @tasks = Task.all
  end
  
  def create
    Task.create(name: params[:name], 
      completion_date: params[:completion_date],
      pending: params[:pending])
    
    redirect_to action: 'index'  
  end
end
