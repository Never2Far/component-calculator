Rails.application.routes.draw do
  resources :components
  resources :colors

  resources :users, only: :show do
    resources :components, only: :index
  end
  
  post 'signup' => 'users#create'
  post 'login' => 'users#show'
  post 'components/delete_all' => 'components#destroy_all'
# get 'users/:user_id/components' => 'components#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
