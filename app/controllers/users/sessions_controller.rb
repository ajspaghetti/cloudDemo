class Users::SessionsController < Devise::SessionsController
  # POST /users/sign_in
  def create
    user = User.find_by(email: sign_in_params[:email])

    if user && user.valid_password?(sign_in_params[:password])
      @token = generate_jwt_token_for(user)
      response.set_header('Authorization', @token)
      respond_with user, location: after_sign_in_path_for(user)
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  private

  def generate_jwt_token_for(user)
    # Here you should implement the logic to generate a JWT token for the user
    # For example, using a JWT library or warden-jwt_auth
  end

  def respond_with(resource, _opts = {})
    render json: { user: resource, token: @token }, status: :ok
  end

  def respond_to_on_destroy
    head :no_content
  end

  def sign_in_params
    params.require(:user).permit(:email, :password)
  end
end
