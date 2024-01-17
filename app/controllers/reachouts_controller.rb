class ReachoutsController < ApplicationController
  before_action :set_reachout, only: [:show, :update, :destroy]
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  # GET /reachouts
  def index
    @reachouts = Reachout.all
    render json: @reachouts
  end

  # GET /reachouts/:id
  def show
    render json: @reachout
  end

  # POST /reachouts
  def create
    @reachout = current_user ? current_user.reachouts.build(reachout_params) : Reachout.new(reachout_params)

    if @reachout.save
      render json: @reachout, status: :created, location: @reachout
    else
      render json: @reachout.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reachouts/:id
  def update
    if @reachout.update(reachout_params)
      render json: @reachout
    else
      render json: @reachout.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reachouts/:id
  def destroy
    @reachout.destroy
  end

  private

  def set_reachout
    @reachout = Reachout.find(params[:id])
  end

  def reachout_params
    params.require(:reachout).permit(:first_name, :last_name, :email, :phone, :company, :title, :message)
  end
end
