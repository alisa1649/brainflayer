class Api::DecksController < ApplicationController
  before_action :require_logged_in, only: [:create, :study, :delete, :index, :edit]

  def create
    @deck = Deck.new(deck_params)
    @deck.author_id = current_user.id
    
    if @deck.save!
      render :show, status: :created
    else
      render json: @deck.errors.full_messages, status: :unprocessable_entity
    end
  end

  def edit
    @deck = Deck.find(params[:id])
    #render what here?
  end

  def update
    @deck = Deck.find(params[:id])

    if @deck.update(deck_params)
      render :show
      else
        render json: @deck.errors.full_messages
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
    @decks = Deck.joins(:author).where("
      UPPER(title) LIKE UPPER('%#{query}%')
      OR UPPER(CONCAT(tags, ',')) LIKE UPPER('%#{query},%')
      OR UPPER(users.email) LIKE UPPER('%#{query}%')
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
    params.require(:deck).permit(:title, :objective, :tag_id, :tags, :id, :icon_url)
  end

end
