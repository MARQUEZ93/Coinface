class Api::PurchasesController < ApplicationController

  def create
    @purchase = Purchase.new(purchase_params)

    if @purchase.save
      render "api/purchases/show"
    else
      render json: @purchase.errors.full_messages, status: 402
    end
  end


  private

  def purchase_params
    params.require(:purchase).permit(:wallet_address, :cash_amount, :amount,
      :asset_type, :card_type, :last_four_digits)
  end
end
