class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    User.find_by_session_token(session[:session_token])
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  private

  def require_logged_in
    unless logged_in?
      render json: ['Invalid credentials'], status: 401
    end
  end

  def require_board_access(board_id)
    if current_user.find_accessible_board_by_id(board_id).nil?
      render json: ['Board not found'], status: 404
    end
  end
end
