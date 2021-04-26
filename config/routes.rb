Rails.application.routes.draw do
  root to: "static_pages#root"
  get "/api/search", to: "api/decks#search"

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :decks do
      resources :cards, only: [:create, :show]
    end
    resources :cards, only: [:destroy]
    resources :tags, only: [:index]
  end
end
