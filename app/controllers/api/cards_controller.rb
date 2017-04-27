class Api::CardsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  before_action only: :index do
    board_id = List.find(Integer(params[:list_id])).board.id
    check_board_privacy(board_id)
  end

  before_action only: [:create, :show] do
    board_id = List.find(Integer(card_params[:list_id])).board.id
    require_board_access(board_id)
  end

  before_action only: [:update, :destroy] do
    board_id = Card.find(Integer(params[:id])).board.id
    require_board_access(board_id)
  end

  def index
    @cards = List.find(params[:list_id]).cards
    render :index
  end

  def show
    @cards = Card.find(params[:id])
    render :show
  end

  def create
    @card = Card.new(card_params)

    if @card.save
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def update
    @card = Card.find(params[:id])

    if @card.update(card_params)
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy!
    render :show
  end

  private

  def card_params
    params.require(:card).permit(:name, :description, :list_id, :ord)
  end
end
