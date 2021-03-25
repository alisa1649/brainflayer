class Api::CardsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  # TODO: verify that only card/deck owner can edit/delete decks
  
  def create
    @card = Card.new(card_params)
    @card.deck_id = params[:deck_id] 
    
    if @card.save!
      render :show, status: :created
    else
      render json: @card.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy!
    render json: @card
  end


   def card_params
    params.require(:card).permit(:title, :body)
  end
end
