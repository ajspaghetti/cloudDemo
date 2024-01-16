class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authenticate_user!

  # GET /users/:id
  def show
    render json: @user
  end

  # PATCH/PUT /users/:id
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/:id
  def destroy
    @user.destroy
  end

  # Token refresh for Redux and Devise JWT
  def refresh_token
    current_user = User.find_by(jti: decode_token['jti']) # Decode token to find user

    if current_user
      new_token = generate_jwt_token_for(current_user)
      render json: { token: new_token }, status: :ok
    else
      render json: { error: 'Invalid token' }, status: :unauthorized
    end
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :phone_number, :company, :title)
    end

    def generate_jwt_token_for(user)
      Warden::JWTAuth::UserEncoder.new.call(user, :user, nil).first
    end

    def decode_token
      token = request.headers['Authorization']&.split(' ')&.last
      return unless token

      begin
        Warden::JWTAuth::TokenDecoder.new.call(token)
      rescue JWT::DecodeError => e
        # Handle token decode error
        Rails.logger.error "JWT Decode Error: #{e.message}"
        nil
      end
    end
end
