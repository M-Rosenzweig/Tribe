Rails.application.routes.draw do
  resources :books
  resources :worries
  resources :priorities
  resources :messages
  resources :bonds
  resources :s_tribes
  resources :users
  resources :sessions, only:[:create, :destroy]

  post "/new_tribe", to: "users#new_tribe"
  post "/join_tribe", to: "users#join_tribe"
  get "/me", to: "users#show"


end
