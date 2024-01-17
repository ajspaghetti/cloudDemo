Rails.application.routes.draw do
  # Devise routes for users
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    confirmations: 'users/confirmations',
    passwords: 'users/passwords',
    unlocks: 'users/unlocks',
    # omniauth_callbacks: 'users/omniauth_callbacks'
  }

  # Custom routes for user CRUD operations
  get '/users/:id', to: 'users#show', as: 'user'
  patch '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'

  # Routes for reachouts
  resources :reachouts
  get '/user_reachouts', to: 'reachouts#user_reachouts'

  # Health check route
  get "up" => "rails/health#show", as: :rails_health_check

  post '/refresh-token', to: 'users#refresh_token'
  post '/users', to: 'users/registrations#create'
  # Define your root route if needed
  root to: 'home#index'
end
