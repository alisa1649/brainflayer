class Api::DecksController < ApplicationController
  before_action :require_logged_in, only: [:create, :study, :delete, :index]

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
    render :show
  end

  def search
    query = params[:query]
    @decks = Deck.where("
      UPPER(title) LIKE UPPER('%#{query}%')
      OR UPPER(CONCAT(tags, ',')) LIKE UPPER('%#{query},%')
    ")
    render :index
  end

  def destroy
    # TODO: add constraints so current user can only modify their own decks + cards
    @deck = Deck.find(params[:id])
    @deck.destroy!
    render json: @deck
  end

  def deck_params
    params.require(:deck).permit(:title, :objective, :tag_id, :tags)
  end

end
