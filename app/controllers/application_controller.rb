class ApplicationController < ActionController::Base
  before_action :set_cors_headers

  def set_cors_headers
    response.set_header('Access-Control-Allow-Origin', '*')
    response.set_header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    response.set_header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, Token')
  end
end
