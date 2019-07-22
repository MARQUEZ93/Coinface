# [Coinface](http://www.thecoinface.com)

[Coinface](http://www.thecoinface.com) is a web app inspired by [Coinbase](https://www.coinbase.com/). A user can buy, sell & transfer cryptocurrencies with virtual cash. Coinface is
a risk-free environment for someone to fully bathe in their Bitcoin FOMO.  

<p align="center"><img src="https://i.imgur.com/XrksXQl.png" width="800px" /></p>

## Features

* Fetch realtime prices of crypto assets.
* Simulate the purchase and selling of a user's assets at live prices.
* Create crypto wallets upon user sign up. Generate a random hexadecimal string address for each of the wallets.
* Transfer & receive crypto assets amongst users with their aforementioned wallet address.

## Getting Started

* Two users have been seeded:
  1. The guest user (email => alejandro@coinface.com, password => password)
  2. An easter egg user (email => Satoshi@vistomail.com, password => password)
* Crypto transfers can be tested with their wallet addresses:
  * Alejandro@coinface.com:
    * BTC wallet address: 507ca1d796ebf6f560d4cb9207fd92aa
    * BCH wallet address: b1e1ff9376ea358faaa4092d7635d7f5
    * ETC wallet address: 873ec767d8be295df050bee2005e04a7
    * ETH wallet address: 626de36bec6512c9851a3481161567e4
    * LTC wallet address: 0cae68ae1a33d5b5015cfc97223fdc8f

  * Satoshi@vistomail.com:
    * BTC wallet address: 9b786559dc88814e7949b40a69435d83
    * BCH wallet address: 22af812536d8e1b115f9da665cba680d
    * ETC wallet address: 8b8e2c777ac89935c6ac4b4f3b90d035
    * ETH wallet address: 64fc69276ce2a9d0a9cf5a3f4be20de6
    * LTC wallet address: e2a1598ecd95751bca3dbed474d217bd

## Code Snippet
* This function provides the user cryptocurrency in each of their wallets, and is run upon user sign up.
* Send an API GET request in the Rails backend.
* This fetches the current price of a particular crypto asset.
* Parse the JSON response to calculate the 0.001 asset value in $USD.
* Create a transfer based upon the user's wallet address, and the master user's address.

<p align="center"><img src="https://i.imgur.com/9uUBlSM.png" width="800px" /></p>

## Built With

* [React](https://reactjs.org/docs/getting-started.html) - The frontend framework used
* [Redux](https://redux.js.org/) - JS library used to manage applications state
* [Rails](https://guides.rubyonrails.org/) - The backend framework used

## Acknowledgments

* Stephen Grider: his [Modern React with Redux](https://www.udemy.com/react-redux/) course contributed to making React.js & Redux easy for me to understand
* Boris Yankov: his [Sparklines](https://github.com/borisyankov/react-sparklines) package was installed to visualize the live 24 hour movement of each of the crypto asset's prices
* Crypto Compare: their [API](https://www.cryptocompare.com/api/) service was deployed to provide realtime prices of each of the crypto assets
