# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create!( email:'Alejandro@coinface.com', password: "password" )
wallets = demoUser.wallets

wallets.each do |wallet|
  if wallet.asset_type == "BTC"
    wallet.amount = 0.2513
  elsif wallet.asset_type == "ETH"
    wallet.amount = 0.8090
  elsif wallet.asset_type == "LTC"
    wallet.amount = 0.9740
  elsif wallet.asset_type == "BCH"
    wallet.amount = 0.0100
  end
  wallet.save!
end

recruiter = User.create!( email:'Recruiter@coinface.com', password: "password" )
recruiterWallets = recruiter.wallets

recruiterWallets.each do |wallet|
  if wallet.asset_type == "BTC"
    wallet.amount = 55
  elsif wallet.asset_type == "ETH"
    wallet.amount = 25.654
  elsif wallet.asset_type == "LTC"
    wallet.amount = 2.4
  elsif wallet.asset_type == "BCH"
    wallet.amount = 0.0405
  elsif wallet.asset_type == "ETC"
    wallet.amount = 0.850769
  end
  wallet.save!
end
