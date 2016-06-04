class SigninController < ApplicationController
  def index
    
  end

  def redirect
  	session[:user] = params[:user_id]
  	redirect_to session[:referer]     
  end              
  
  def signout
    session[:user] = nil
  end
end
