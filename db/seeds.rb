# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

alejandro = User.create!( email:'Alejandro@coinface.com', password: "password" )
wallets = alejandro.wallets
alejandroCash = alejandro.cash
alejandroCash.amount = 250000.85
alejandroCash.save!

alejandroLTCwallet = nil
alejandroETCwallet = nil

wallets.each do |wallet|
  if wallet.asset_type == "BTC"
    wallet.amount = 0.2513
  elsif wallet.asset_type == "ETH"
    wallet.amount = 0.8090
  elsif wallet.asset_type == "LTC"
    wallet.amount = 0.9740
    alejandroLTCwallet = wallet
  elsif wallet.asset_type == "BCH"
    wallet.amount = 0.0100
  elsif wallet.asset_type == "ETC"
    wallet.amount = 1.00
    alejandroETCwallet = wallet
  end
  wallet.save!
end

recruiter = User.create!( email:'Recruiter@coinface.com', password: "password" )
recruiterWallets = recruiter.wallets

recruiterLTCwallet = nil
recruiterWallets.each do |wallet|
  if wallet.asset_type == "BTC"
    wallet.amount = 55
  elsif wallet.asset_type == "ETH"
    wallet.amount = 25.654
  elsif wallet.asset_type == "LTC"
    wallet.amount = 2.4
    recruiterLTCwallet = wallet
  elsif wallet.asset_type == "BCH"
    wallet.amount = 0.0405
  elsif wallet.asset_type == "ETC"
    wallet.amount = 0.850769
  end
  wallet.save!
end
transfer = Transfer.create!( amount: 1.00, sender_wallet_address: recruiterLTCwallet.address, receiver_wallet_address: alejandroLTCwallet.address )
transfer.save!
recruiterLTCwallet.amount = recruiterLTCwallet.amount - 1.00
recruiterLTCwallet.save!

alejandroLTCwallet.amount = alejandroLTCwallet.amount + 1.00
alejandroLTCwallet.save!

selling = Selling.create!(amount:0.5, cash_amount:26.00, cash_id: alejandro.cash.id, wallet_id: alejandroLTCwallet.id)
selling.save!
alejandro.cash.amount+= 26.00
alejandro.cash.save!
alejandroLTCwallet.amount +=0.5
alejandroLTCwallet.save!

purchase = Purchase.create!(amount: 0.75, cash_amount: 7.00, cash_id: alejandro.cash.id, wallet_id: alejandroETCwallet.id)
purchase.save!
alejandro.cash.amount-= 7.00
alejandro.cash.save!
alejandroETCwallet.amount+=0.75
alejandroETCwallet.save!

purchase1 = Purchase.create!(amount: 0.25, cash_amount: 3.00, cash_id: alejandro.cash.id, wallet_id: alejandroETCwallet.id)
purchase1.save!

alejandro.cash.amount-= 3.00
alejandro.cash.save!
alejandroETCwallet.amount+=0.25
alejandroETCwallet.save!
