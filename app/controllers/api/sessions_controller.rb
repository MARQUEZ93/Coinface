class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: [], status: 200
    else
      #render no status code 
      render json: ["Nobody signed in"]
    end
  end
end
