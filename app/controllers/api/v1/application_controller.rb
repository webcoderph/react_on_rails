class Api::V1::ApplicationController < ActionController::Base
  skip_before_action :protect_from_forgery
  protect_from_forgery with: :null_session

  include DeviseTokenAuth::Concerns::SetUserByToken
end
