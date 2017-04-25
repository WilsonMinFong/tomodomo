class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ["Invalid email or password"], status: 422
    end
  end

  def destroy
    if logged_in?
      logout!
      render json: {}
    else
      render json: ["Not currently logged in"], status: 404
    end
  end
end
