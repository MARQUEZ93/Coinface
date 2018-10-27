import React, { Component } from 'react';
import { GridLoader } from 'halogenium';
import axios from 'axios';

const URL = `https://min-api.cryptocompare.com/data/generateAvg?fsym=`;
const URL_END = `&tsym=USD&e=Kraken`;

class YourAccountWallets extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "BTC": null, "BCH": null, "ETC": null,
      "ETH": null, "LTC": null, "btcAmount": null, "etcAmount":null,
      "ethAmount": null, "bchAmount":null, "ltcAmount":null
    };
    this.getPrice = this.getPrice.bind(this);
    this.getValue = this.getValue.bind(this);
    this.getAmounts = this.getAmounts.bind(this);
  }

  componentDidMount() {
    this.getPrice("BTC");
    this.getPrice("BCH");
    this.getPrice("ETC");
    this.getPrice("ETH");
    this.getPrice("LTC");
    this.getAmounts();
  }

  getAmounts() {
    let btc; let etc; let ltc; let bch; let eth;
    const wallets = this.props.wallets;
    for (let i = 0; i < wallets.length; i++) {
      if (wallets[i].asset_type == "BTC") {
        btc = wallets[i].amount;
      } else if (wallets[i].asset_type == "ETC") {
        etc = wallets[i].amount;
      } else if (wallets[i].asset_type == "ETH") {
        eth = wallets[i].amount;
      } else if (wallets[i].asset_type == "LTC") {
        ltc = wallets[i].amount;
      } else if (wallets[i].asset_type == "BCH") {
        bch = wallets[i].amount;
      }
    }
    this.setState ({ "btcAmount": btc, "etcAmount": etc,  "bchAmount": bch, "ltcAmount": ltc, "ethAmount": eth, "gotAmounts": true });
  }

  getPrice(symbol) {
    const url = `${URL}`+`${symbol}`+`${URL_END}`;
    axios.get(url).then(res => {
      const price = res.data.RAW.PRICE;
      if (symbol === "BTC") {
        this.setState( { "BTC" : price });
      }
      if (symbol === "ETC") {
        this.setState( { "ETC" : price });
      }
      if (symbol === "ETH") {
        this.setState( { "ETH" : price });
      }
      if (symbol === "LTC") {
        this.setState( { "LTC" : price });
      }
      if (symbol === "BCH") {
        this.setState( { "BCH" : price });
      }
    });
  }

  getValue(wallet) {
    const asset = wallet.asset_type;
    return (this.state[asset] * wallet.amount);
  }

  render() {

    const values = Object.values(this.state);
    let stillFetchingData = false;
    for (let i = 0; i < values.length; i++) {
      if (values[i] === null) {
        stillFetchingData = true;
        break;
      }
    }
    if (stillFetchingData) {
      return (
        <div className='loadbar'>
          <GridLoader className="GridLoader" />
        </div>
      );
    }

    const wallets = this.props.wallets;
    let portfolioValue = 0;
    for (let i = 0; i < wallets.length; i++) {
      portfolioValue+=this.getValue(wallets[i]);
    }
    portfolioValue = portfolioValue.toFixed(2);

    return (
      <div className="YourAccountWallets">
      {portfolioValue}

      </div>
    );
  }
}

export default YourAccountWallets;
