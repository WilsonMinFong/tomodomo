class Api::ListsController < ApplicationController
  def index
    @lists = List.where(board_id: params[:board_id]).order(:ord)

    render :index
  end

  def create
    @list = current_user.lists.new(list_params)

    if @list.save
      render :show
    else
      render json: @list.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @list = current_user.lists.find(params[:id])

    if @list.update(list_params)
      render :show
    else
      render json: @list.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @list = current_user.lists.find(params[:id])
    @list.destroy!
    render json: {}
  end

  private

  def list_params
    params.require(:list).permit(:name, :board_id, :ord)
  end
end
