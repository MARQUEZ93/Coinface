import React from 'react';
import axios from 'axios';
import { GridLoader } from 'halogenium';
import _ from 'lodash';
import FiveBoxes from '../Welcome/FiveBoxes';
import YourPortfolio from './YourPortfolioContainer';
import Footer from '../Welcome/Footer';
import RecentActivity from './RecentActivity';
import NavBar from './NavBar';

class PortfolioValue extends React.Component {

  constructor(props) {
    super(props);
    this.getValue = this.getValue.bind(this);
  }

  componentDidMount() {
    this.props.getPrice("BTC");
    this.props.getPrice("BCH");
    this.props.getPrice("ETC");
    this.props.getPrice("ETH");
    this.props.getPrice("LTC");
  }

  getValue(wallet) {
    const asset = wallet.asset_type;
    return (this.props.prices[asset] * wallet.amount);
  }

  render() {
    const values = Object.values(this.props.prices);
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
          <NavBar />
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
          <YourPortfolio portfolioValue={portfolioValue}/>
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
