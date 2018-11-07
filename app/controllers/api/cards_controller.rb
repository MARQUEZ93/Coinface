class Api::CardsController < ApplicationController

  def create
    @card = Card.new(card_params)

    if @card.save
      render "api/cards/show"
    else
      render json: @card.errors.full_messages, status: 402
    end
  end


  private

  def card_params
    params.require(:transfer).permit(:number, :name, :postal, :cvc, :exp, :user_id)
  end
end
