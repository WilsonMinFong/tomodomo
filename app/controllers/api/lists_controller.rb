class Api::ListsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  before_action only: :index do
    check_board_privacy(Integer(params[:board_id]))
  end

  before_action only: :create do
    require_board_access(Integer(list_params[:board_id]))
  end

  before_action only: [:update, :destroy] do
    list = List.find(params[:id])
    require_board_access(list.board_id)
  end

  def index
    @lists = List.where(board_id: params[:board_id])

    render :index
  end

  def create
    @list = current_user.lists.new(list_params)

    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def update
    @list = List.find(params[:id])

    if @list.update(list_params)
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy!
    render :show
  end

  private

  def list_params
    params.require(:list).permit(:name, :board_id, :ord)
  end
end
