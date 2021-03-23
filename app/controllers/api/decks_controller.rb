class Api::DecksController < ApplicationController
  before_action :require_logged_in, only: [:create, :study, :delete, :index] # TODO: add constraints here

  def create
    @deck = Deck.new(deck_params)
    @deck.author_id = current_user.id
    
    if @deck.save!
      render :show, status: :created
    else
      render json: @deck.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @decks = current_user.decks
    render :index
  end

  def show
    @deck = Deck.includes(:cards, :author).find(params[:id])
    
  end

  def destroy
    @deck = Deck.find(params[:id])
    @deck.destroy!
    render json: @deck
  end

  def deck_params
    params.require(:deck).permit(:title, :objective, :tag_id)
  end

end
