class Api::CardsController < ApplicationController

  def create
    @card = Card.new(card_params)
    if @card.save
      render "api/cards/show"
    else
      render json: @card.errors.full_messages, status: 402
    end
  end

  def destroy
    card = current_user.card
    card.destroy
    current_user.card = nil
    current_user.save
    #user will have no card on file
    render json: ['Card deleted from database'], status: 200
  end


  private

  def card_params
    params.require(:transfer).permit(:number, :name, :postal, :cvc, :exp, :user_id)
  end
end
