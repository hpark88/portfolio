require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'
require 'haml'

get "/" do
  erb :index
end

get '/publet' do
  erb :publet
end

