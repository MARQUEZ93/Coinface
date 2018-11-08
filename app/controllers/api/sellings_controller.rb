class Api::SellingsController < ApplicationController

  def create
    @selling = Selling.new(selling_params)

    if @selling.save
      render "api/sellings/show"
    else
      render json: @selling.errors.full_messages, status: 402
    end
  end


  private

  def selling_params
    params.require(:selling).permit(:wallet_address, :cash_amount, :amount,
      :asset_type, :card_type, :last_four_digits)
  end
end
