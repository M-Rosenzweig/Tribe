Rails.application.routes.draw do
# namespace :api do
  resources :books
  resources :worries
  resources :priorities
  resources :messages
  resources :bonds
  resources :s_tribes
  # resources :users, only:[:index, :update]
  resources :sessions, only:[:create]
  mount ActionCable.server => '/cable'



  # get "/users", to: "users#index"

  get "/user_messages/:id", to: "messages#user_messages"

  post "/new_tribe", to: "users#new_tribe"
  post "/join_tribe", to: "users#join_tribe"
  get "/me", to: "users#show"
  get "/energy/:id", to: "users#energy"
  patch "/update/:id", to: "users#update"

  get "/user_priorities/:id", to: "priorities#user_priorities"
  get "/user_worries/:id", to: "worries#user_worries"


  delete "/logout", to: "sessions#destroy"

# end

#   # get '*path', to: "application#fallback_index_html", constraints: ->(request) do
#   #   !request.xhr? && request.format.html?

#   get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  

end
