Rails.application.routes.draw do
  resources :worries
  resources :priorities
  resources :messages
  resources :bonds
  resources :s_tribes
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/hello', to: 'application#hello_world'
  # Defines the root path route ("/")
  # root "articles#index"
end
