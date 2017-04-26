class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: :index

  before_action only: :index do
    require_board_access(Integer(params[:board_id]))
  end

  def index
    @users = Board.find(params[:board_id]).users
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password)
  end
end
