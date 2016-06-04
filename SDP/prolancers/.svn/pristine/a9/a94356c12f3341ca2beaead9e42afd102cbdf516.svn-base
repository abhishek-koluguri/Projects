module ApplicationHelper
  def check_signed_in
    if session[:user] == nil
      if request.format.html?
        session[:referer] = request.url
        redirect_to signin_index_path
      else
        session[:referer] = request.url
        @error = 'Please Signin!'
        @forward_page = '/signin'
        render 'signin/show_signin.js'
      end
    end
  end
end
