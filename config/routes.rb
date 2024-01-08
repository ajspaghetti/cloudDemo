Rails.application.routes.draw do
  # Use a custom controller for registration and sessions
  devise_for :users, controllers: {
    registrations: 'api/v1/registrations',
    sessions: 'api/v1/sessions'
  }

  # Define your other application routes below

  # For example, you can define a custom route like this:
  # get 'custom_route', to: 'custom_controller#custom_action'

#################
    # We've specified custom controllers for user registration and sessions. You can replace 'api/v1/registrations' and 'api/v1/sessions' with the actual controller names you want to use for user registration and login.

    # You can define your other application routes below the devise_for :users block. Add any custom routes and resources your application requires.

    # If you want to define a custom route, you can use the get, post, put, patch, or delete methods, depending on the HTTP method you want to use. Replace 'custom_route', 'custom_controller', and 'custom_action' with your desired route, controller, and action names.

    # The root route, which defines the root path ("/"), is commented out. You can uncomment it and specify the controller and action you want to use as the root of your application.

    ## Remember to replace 'api/v1/registrations' and 'api/v1/sessions' with the actual controller names you plan to use for user registration and login. Additionally, define any other routes and resources your application requires below the devise_for :users block.
##################

  # Defines the root path route ("/")
  # root "articles#index"
end
