class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: :index

  before_action only: :index do
    require_board_access(Integer(params[:board_id]))
  end

  before_action only: :show do
    require_board_access(Integer(params[:id]))
  end

  def index
    @users = Board.find(params[:board_id]).users
  end

  def show
    @users = User.find(params[:id])
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

  def search
    if !params[:query].nil? && params[:query].length > 0
      @users = User.where(
        "lower(name) LIKE :query OR lower(email) LIKE :query",
        query: "%#{params[:query].downcase}%"
      ).limit(5)
      render :index
    else
      render json: {}
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password)
  end
end
