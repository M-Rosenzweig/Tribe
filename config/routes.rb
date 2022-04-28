Rails.application.routes.draw do
  resources :books
  resources :worries
  resources :priorities
  resources :messages
  resources :bonds
  resources :s_tribes
  resources :users

  post "/new_tribe", to: "users#new_tribe"

end
