Rails.application.routes.draw do
  root to: "static_pages#root"
  get "/api/search", to: "api/decks#search", :defaults => { :format => 'json' }
  get "/api/decks/all", to: "api/decks#get_all", :defaults => { :format => 'json' }

  # get - the type of http request
  # "/api/search" - the url path the client (postman, react making ajax call) will visit
  # we use /api to integrate the react/redux frontend with the rails backend

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :decks do
      resources :cards, only: [:create, :show]
    end
    resources :cards, only: [:destroy]
    resources :tags, only: [:index, :edit, :update]
  end
end
