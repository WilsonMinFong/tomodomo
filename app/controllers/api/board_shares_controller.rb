class Api::BoardSharesController < ApplicationController
  before_action :require_logged_in

  before_action only: :create do
    require_board_access(Integer(board_share_params[:board_id]))
  end

  before_action only: :destroy do
    board_share = BoardShare.find(Integer(params[:id]))
    require_board_access(board_share.board.id)
  end

  def create
    @board_share = BoardShare.new(board_share_params)

    if @board_share.save
      render :show
    else
      render json: @board_share.errors.full_messages, status: 422
    end
  end

  def destroy
    @board_share = BoardShare.find(params[:id])
    @board_share.destroy!
    render json: {}
  end

  private

  def board_share_params
    params.require(:board_share).permit(:board_id, :user_id)
  end
end
