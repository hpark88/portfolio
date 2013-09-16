require 'rubygems'
require 'sinatra'

get "/" do
  erb :index
end

get '/publet' do
  erb :publet
end

get '/sunset' do
	erb :sunset
end

get '/agnitus' do
  erb :agnitus
end

get '/daydream' do
	erb :daydream
end

get '/geni' do
	erb :geni
end