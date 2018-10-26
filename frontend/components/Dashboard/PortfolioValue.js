import React from 'react';
import axios from 'axios';
import { GridLoader } from 'halogenium';
import _ from 'lodash';
import FiveBoxes from '../Welcome/FiveBoxes';
import YourPortfolio from './YourPortfolio';
import Footer from '../Welcome/Footer';
import RecentActivity from './RecentActivity';

const URL = `https://min-api.cryptocompare.com/data/generateAvg?fsym=`;
const URL_END = `&tsym=USD&e=Kraken`;
class PortfolioValue extends React.Component {

  constructor(props) {
    super(props);
    this.state = { "BTC": null, "BCH": null, "ETC": null,
      "ETH": null, "LTC": null
    };
    this.getPrice = this.getPrice.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  componentDidMount() {
    this.getPrice("BTC");
    this.getPrice("BCH");
    this.getPrice("ETC");
    this.getPrice("ETH");
    this.getPrice("LTC");
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
          <GridLoader color="#6495ED" size="10px" margin="4px"/>
        </div>
      );
    }
    const wallets = this.props.wallets;
    let portfolioValue = 0;
    for (let i = 0; i < wallets.length; i++) {
      portfolioValue+=this.getValue(wallets[i]);
    }
    portfolioValue = portfolioValue.toFixed(2);
    let strPV = portfolioValue.toString();
    const decimals = strPV.charAt(strPV.length - 2) +  strPV.charAt(strPV.length - 1);
    const floor = _.floor(portfolioValue);
    const numberWithCommas = (num) => {
      var parts = num.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    const floorWithCommas = numberWithCommas(floor);
    return (
      <div className="pvComponent">
        <div className="portfolioValue">
            <div className="pvDiv2">
              <p className="yourPortfolioValue">YOUR PORTFOLIO VALUE</p>
              <div className="pvDiv">
                <p className="pvDollarSign">$</p>
                <p className="pvFloor">
                  {floorWithCommas}
                </p>
                <p className="decimalsPV">.{decimals}</p>
            </div>
          </div>
        </div>
        <FiveBoxes />
        <div className="divYPRA">
          <YourPortfolio
            wallets={this.props.wallets} portfolioValue={portfolioValue}
            btcPrice={this.state["BTC"]} bchPrice={this.state["BCH"]}
            etcPrice={this.state["ETC"]} ethPrice={this.state["ETH"]}
            ltcPrice={this.state["LTC"]}
            />
          <RecentActivity
            email={this.props.email}
            transfers={this.props.transfers} sellings={this.props.sellings}
            purchases={this.props.purchases} receivers={this.props.receivers}
            />
        </div>
        <Footer />
      </div>
    );
  }

}

export default PortfolioValue;
