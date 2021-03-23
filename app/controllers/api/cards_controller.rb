class Api::CardsController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]
  
  def create
    @card = Card.new(card_params)
    # TODO: put deck index here?? Nested
    
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
    params.require(:card).permit(:title, :body, :deck_id)
  end
end
