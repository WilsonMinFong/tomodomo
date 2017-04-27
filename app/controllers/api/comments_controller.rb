class Api::CommentsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  before_action only: :index do
    board_id = Card.find(Integer(params[:card_id])).board.id
    check_board_privacy(board_id)
  end

  before_action only: :create do
    board_id = Card.find(Integer(comment_params[:card_id])).board.id
    require_board_access(board_id)
  end

  def index
    @comments = Card.find(params[:card_id]).comments
  end

  def create
    @comment = current_user.comments.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = current_user.comments.find(params[:id])

    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = current_user.comments.find(params[:id])
    @comment.destroy
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :card_id)
  end
end
