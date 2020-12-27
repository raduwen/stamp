Rails.application.routes.draw do
  get '/preview' => 'preview#show'

  resources :posts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

if Rails.env.development?
  Rails.application.routes.default_url_options[:host] = '172.16.2.16:3000'
end
