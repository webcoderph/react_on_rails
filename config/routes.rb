Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/v1/sessions'
  resources :movies
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
