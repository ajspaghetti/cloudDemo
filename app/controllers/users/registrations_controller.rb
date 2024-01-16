class Users::RegistrationsController < Devise::RegistrationsController
  def create
    build_resource(sign_up_params)

    resource.save
    if resource.persisted?
      if resource.active_for_authentication?
        # Manually handle JWT token generation and user sign-in
        @token = generate_jwt_token_for(resource)
        response.set_header('Authorization', @token)
        render json: { user: resource.as_json(except: [:encrypted_password]), token: @token }, status: :created
      else
        # For inactive accounts, adjust the response as needed
        expire_data_after_sign_in!
        render json: { user: resource.as_json(except: [:encrypted_password]) }, status: :ok
      end
    else
      clean_up_passwords resource
      set_minimum_password_length
      render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def generate_jwt_token_for(user)
    # Using devise-jwt to generate a JWT token for the user
    Warden::JWTAuth::UserEncoder.new.call(user, :user, nil).first
  end
end
