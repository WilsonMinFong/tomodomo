class Api::CardsController < ApplicationController
  def index
    @cards = Board.find(params[:board_id]).cards
    render :index
  end

  def show
    @card = Card.find(params[:id])
    render :show
  end

  def create
    list = current_user.lists.find(card_params[:list_id])
    @card = list.cards.new(card_params)

    if @card.save
      render :show
    else
      render json: @card.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @card = current_user.cards.find(params[:id])

    if @card.update(card_params)
      render :show
    else
      render json: @card.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @card = current_user.cards.find(params[:id])
    @card.destroy!
    render :show
  end

  private

  def card_params
    params.require(:card).permit(:name, :description, :list_id, :ord)
  end
end
