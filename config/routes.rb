Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # Custom routes for user CRUD operations
  # Assuming you have corresponding actions in UsersController
  get '/users/:id', to: 'users#show', as: 'user'
  patch '/users/:id', to: 'users#update'
  delete '/users/:id', to: 'users#destroy'

  # Health check route
  get "up" => "rails/health#show", as: :rails_health_check

  # You can define your root route if needed
  # root "some_controller#some_action"
end
