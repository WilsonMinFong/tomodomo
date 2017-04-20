class Api::BoardsController < ApplicationController
  def index
    @boards = current_user.boards
    render :index
  end

  def create
    @board = current_user.boards.new(board_params)

    if @board.save
      render :show
    else
      render json: @board.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @board = current_user.boards.find(params[:id])

    render :show
  end

  def update
    @board = current_user.boards.find(params[:id])
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
