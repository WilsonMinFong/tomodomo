Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :users, only: :create do
      get 'search', to: :collection
    end

    resource :session, only: [:create, :destroy]

    resources :boards, except: [:new, :edit] do
      resources :lists, only: :index
      resources :users, only: :index
      resources :board_shares, only: :index
    end

    resources :lists, only: [:create, :update, :destroy] do
      resources :cards, only: :index
    end

    resources :cards, only: [:create, :update, :destroy] do
      resources :comments, only: :index
    end

    resources :board_shares, only: [:create, :destroy]

    resources :comments, only: [:create, :update, :destroy]
  end
end
