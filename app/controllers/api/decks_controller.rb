class Api::DecksController < ApplicationController
  before_action :require_logged_in, only: [:create, :delete, :edit]

  def create
    @deck = Deck.new(deck_params)
    @deck.author_id = current_user.id
    
    if @deck.save!
      render :show, status: :created
    else
      render json: @deck.errors.full_messages, status: :unprocessable_entity
    end
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
    @decks = current_user ? current_user.decks : []
    render :index
  end

  def get_all
    @decks = Deck.all
    render :index
  end

  def show
    @deck = Deck.includes(:cards, :author).find(params[:id])
    render :show
  end

  def search
    @decks = Deck.joins(:author).where("
      UPPER(title) LIKE UPPER(:query)
      OR UPPER(CONCAT(tags, ',')) LIKE UPPER(:query)
      OR UPPER(users.email) LIKE UPPER(:query)
    ", {:query => "%#{params[:query]}%"})
    render :index
  end

  def destroy
    @deck = Deck.find(params[:id])
    if @deck.author_id != current_user.id
      render json: ["Can't delete another user's deck"], status: 401
      return
    end
    @deck.destroy!
    render json: @deck
  end

  def deck_params
    params.require(:deck).permit(:title, :objective, :tag_id, :tags, :id, :icon_url)
  end

end
