class Api::V1::ApplicationController < ActionController::Base
  protect_from_forgery :null_session
end
