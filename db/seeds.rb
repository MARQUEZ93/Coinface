# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

coinface = User.create!( email:'coinface@coinface.com', password: "password123",
  firstName: "Co", middleName: "In", lastName: "Face" )

coinfaceWallets = coinface.wallets

coinfaceWallets.each do |wallet|
  if wallet.asset_type == "BTC"
    wallet.amount = 50
  elsif wallet.asset_type == "ETH"
    wallet.amount = 50
  elsif wallet.asset_type == "LTC"
    wallet.amount = 50
  elsif wallet.asset_type == "BCH"
    wallet.amount = 50
  elsif wallet.asset_type == "ETC"
    wallet.amount = 50
  end
  wallet.save!
end

alejandro = User.create!( email:'Alejandro@coinface.com', password: "password",
  firstName: "Alejandro", middleName: "E.", lastName: "Marquez" )
wallets = alejandro.wallets
alejandroName = alejandro.firstName + " " + alejandro.middleName + " " + alejandro.lastName
alejandroCard = Card.create!( number: 1234567891234567, name: alejandroName, exp: "12/19", cvc: 123, postal: 20815, user_id: alejandro.id)
alejandroCard.save!

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

recruiter = User.create!( firstName: "Satoshi", middleName: "NS", lastName: "Nakamoto",
  email:'satoshi@vistomail.com', password: "password" )
recruiterWallets = recruiter.wallets

recruiterName = recruiter.firstName + " " + recruiter.middleName + " " + recruiter.lastName
recruiterCard = Card.create!( number: 9834567891234567, name: recruiterName, exp: "11/20", cvc: 123, postal: 10810, user_id: recruiter.id)
recruiterCard.save!

recruiterBCHwallet = nil
recruiterBTCwallet = nil
recruiterETHwallet = nil
recruiterLTCwallet = nil
recruiterECHwallet = nil

recruiterWallets.each do |wallet|
  if wallet.asset_type == "BTC"
    wallet.amount = 10
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
  sender_wallet_address: recruiterLTCwallet.address,
  receiver_wallet_address: alejandroLTCwallet.address,
  note: "Alejandro, I've
always hated projects with a lot of big dependencies" )
transfer.save!

selling = Selling.create!(amount: 0.5, cash_amount: 26.00,
  asset_type: "LTC", wallet_address: alejandroLTCwallet.address,
  card_type: alejandroCard.card_type,
  last_four_digits: alejandroCard.last_four_digits)
selling.save!

purchase = Purchase.create!(amount: 0.75, cash_amount: 7.00,
  asset_type: "ETC", wallet_address: alejandroETCwallet.address, card_type: alejandroCard.card_type,
  last_four_digits: alejandroCard.last_four_digits)
purchase.save!

purchase1 = Purchase.create!(amount: 0.25, cash_amount: 3.00,
  asset_type: "ETC", wallet_address: alejandroETCwallet.address, card_type: alejandroCard.card_type,
  last_four_digits: alejandroCard.last_four_digits)
purchase1.save!


transfer = Transfer.create!( amount: 0.1, cash_amount: 642.385, asset_type: "BTC",
  sender_wallet_address: alejandroBTCwallet.address, receiver_wallet_address: recruiterBTCwallet.address,
note: "thanks Satoshi! cheers - Alejandro " )
transfer.save!

selling = Selling.create!(amount: 0.5, cash_amount: 105.13,
  asset_type: "ETH", wallet_address: recruiterETHwallet.address, card_type: recruiterCard.card_type,
  last_four_digits: recruiterCard.last_four_digits)
selling.save!
