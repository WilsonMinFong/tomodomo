class Api::BoardsController < ApplicationController
  before_action :require_logged_in, only: [:index, :create, :update, :destroy]

  before_action only: [:show] do
    check_board_privacy(Integer(params[:id]))
  end

  before_action only: [:update, :destroy] do
    require_board_access(Integer(params[:id]))
  end

  def index
    @boards = current_user.accessible_boards
    render :index
  end

  def create
    @board = current_user.boards.new(board_params)

    if @board.save
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def show
    @board = Board.find(params[:id])

    render :show
  end

  def update
    @board = Board.find(params[:id])

    if @board.update(board_params)
      render :show
    else
      render json: @board.errors.full_messages
    end
  end

  def destroy
    @board = current_user.boards.find(params[:id])

    @board.destroy!
    render json: {}
  end

  private

  def board_params
    params.require(:board).permit(:name, :private)
  end
end
