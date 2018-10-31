class Api::TransfersController < ApplicationController

  def create
    @transfer = Transfer.new(transfer_params)

    if @transfer.save
      render "api/transfers/show"
    else
      render json: @transfer.errors.full_messages, status: 402
    end
  end


  private

  def transfer_params
    params.require(:user).permit(:cash_amount, :amount, :receiver_wallet_address, :sender_wallet_address, :note, :asset_type)
  end
end
