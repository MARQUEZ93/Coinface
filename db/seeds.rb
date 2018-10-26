# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

alejandro = User.create!( email:'Alejandro@coinface.com', password: "password",
  firstName: "Alejandro", middleName: "E.", lastName: "Marquez" )
wallets = alejandro.wallets
alejandroCash = alejandro.cash
alejandroCash.amount = 250000.85
alejandroCash.save!

alejandroLTCwallet = nil
alejandroETCwallet = nil
alejandroBTCwallet = nil
alejandroETHwallet = nil
alejandroBCHwallet = nil

wallets.each do |wallet|
  if wallet.asset_type == "BTC"
    wallet.amount = 0.2513
    alejandroBTCwallet = wallet
  elsif wallet.asset_type == "ETH"
    wallet.amount = 0.8090
    alejandroETHwallet = wallet
  elsif wallet.asset_type == "LTC"
    wallet.amount = 0.9740
    alejandroLTCwallet = wallet
  elsif wallet.asset_type == "BCH"
    wallet.amount = 0.0100
    alejandroBCHwallet = wallet
  elsif wallet.asset_type == "ETC"
    wallet.amount = 1.00
    alejandroETCwallet = wallet
  end
  wallet.save!
end

recruiter = User.create!( firstName: "Satoshi", middleName: "Bitcoin", lastName: "Nakamoto", email:'guest@coinface.com', 
  password: "password" )
recruiterWallets = recruiter.wallets

recruiterLTCwallet = nil
recruiterBTCwallet = nil
recruiterETHwallet = nil
recruiterBCHwallet = nil
recruiterETCwallet = nil

recruiterWallets.each do |wallet|
  if wallet.asset_type == "BTC"
    wallet.amount = 55
    recruiterBTCwallet = wallet
  elsif wallet.asset_type == "ETH"
    wallet.amount = 25.654
    recruiterETHwallet = wallet
  elsif wallet.asset_type == "LTC"
    wallet.amount = 2.4
    recruiterLTCwallet = wallet
  elsif wallet.asset_type == "BCH"
    wallet.amount = 0.0405
    recruiterBCHwallet = wallet
  elsif wallet.asset_type == "ETC"
    wallet.amount = 0.850769
    recruiterETCwallet = wallet
  end
  wallet.save!
end

transfer = Transfer.create!( amount: 1.00, cash_amount: 52.07, asset_type: "LTC",
  sender_wallet_address: recruiterLTCwallet.address, receiver_wallet_address: alejandroLTCwallet.address )
transfer.save!
recruiterLTCwallet.amount = recruiterLTCwallet.amount - 1.00
recruiterLTCwallet.save!

alejandroLTCwallet.amount = alejandroLTCwallet.amount + 1.00
alejandroLTCwallet.save!

selling = Selling.create!(amount: 0.5, cash_amount: 26.00, cash_id: alejandro.cash.id,
  asset_type: "LTC", wallet_id: alejandroLTCwallet.id)
selling.save!
alejandro.cash.amount+= 26.00
alejandro.cash.save!
alejandroLTCwallet.amount +=0.5
alejandroLTCwallet.save!

purchase = Purchase.create!(amount: 0.75, cash_amount: 7.00, cash_id: alejandro.cash.id,
  asset_type: "ETC", wallet_id: alejandroETCwallet.id)
purchase.save!
alejandro.cash.amount-= 7.00
alejandro.cash.save!
alejandroETCwallet.amount+=0.75
alejandroETCwallet.save!

purchase1 = Purchase.create!(amount: 0.25, cash_amount: 3.00, cash_id: alejandro.cash.id,
  asset_type: "ETC", wallet_id: alejandroETCwallet.id)
purchase1.save!

alejandro.cash.amount-= 3.00
alejandro.cash.save!
alejandroETCwallet.amount+=0.25
alejandroETCwallet.save!

transfer = Transfer.create!( amount: 0.1, cash_amount: 642.385, asset_type: "BTC",
  sender_wallet_address: alejandroBTCwallet.address, receiver_wallet_address: recruiterBTCwallet.address )
transfer.save!

recruiterBTCwallet.amount = recruiterBTCwallet.amount + 0.100
recruiterBTCwallet.save!

alejandroBTCwallet.amount = alejandroBTCwallet.amount- 0.100
alejandroBTCwallet.save!

selling = Selling.create!(amount: 0.5, cash_amount: 105.13, cash_id: recruiter.cash.id,
  asset_type: "ETH", wallet_id: recruiterETHwallet.id)
selling.save!
alejandro.cash.amount+= 105.13
alejandro.cash.save!
alejandroETHwallet.amount -=0.5
alejandroETHwallet.save!
