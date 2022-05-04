Rails.application.routes.draw do
  resources :books
  resources :worries
  resources :priorities
  resources :messages
  resources :bonds
  resources :s_tribes
  # resources :users, only:[:index, :update]
  resources :sessions, only:[:create]

  get "/index", to: "users#index"

  post "/new_tribe", to: "users#new_tribe"
  post "/join_tribe", to: "users#join_tribe"
  get "/me", to: "users#show"
  get "/energy/:id", to: "users#energy"
  patch "/update/:id", to: "users#update"

  delete "/logout", to: "sessions#destroy"



end
