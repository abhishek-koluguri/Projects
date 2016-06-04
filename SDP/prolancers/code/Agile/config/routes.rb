Agile::Application.routes.draw do

  get "student_memberships/index"
  get "student_memberships/activation"
  get "student_memberships/not_auth"
  get "student_memberships/admin"
  get "student_memberships/approve"
  post "student_memberships/reject"
  post "student_memberships/verify"
  post "student_memberships/create"
  get "student_memberships/showreject"
  get "presentations/:id" => 'presentations#show', :as => :presentation
  get "discussions/new"
  post 'discussions/new' => 'discussions#create'
  #get 'discussions/index'
  get 'discussions/show'
  #get "discussions/:id" => 'discussions#show'
  post "discussions/create"
  get "discussions/reply"
  post "discussions/post_reply"
  get "student_memberships/prof_auth"
  get "signin/redirect"
  resources :signin, :only => [:index] do
    collection do
      get :signout
    end
  end
end
