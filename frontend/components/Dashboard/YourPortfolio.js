import React from 'react';
import { GridLoader } from 'halogenium';
import _ from 'lodash';

class YourPortfolio extends React.Component {

  constructor(props) {
    super(props);
    this.getWalletAmounts = this.getWalletAmounts.bind(this);
    this.renderTableRow = this.renderTableRow.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  componentDidMount() {
    this.props.getPrice("BTC");
    this.props.getPrice("ETC");
    this.props.getPrice("ETH");
    this.props.getPrice("LTC");
    this.props.getPrice("BCH");
  }

  getWalletAmounts() {
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
    return { "BTC": btc, "ETC": etc, "LTC": ltc, "BCH": bch, "ETH": eth };
  }

  getPercentage(amount, price) {
    let returnPercentage = _.round((( (amount * price) / this.props.portfolioValue) * 100));
    if (!returnPercentage) {
      return 0;
    }
    return returnPercentage;
  }

  displayUSD(price) {
    var parts = price.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  sortNumber(a,b) {
    return a - b;
  }

  renderTable(wallets) {
    let listItems = [];
    let btcPercent = this.getPercentage(wallets["BTC"], this.props.prices["BTC"]);
    let ethPercent = this.getPercentage(wallets["ETH"], this.props.prices["ETH"]);
    let ltcPercent = this.getPercentage(wallets["LTC"], this.props.prices["LTC"]);
    let bchPercent = this.getPercentage(wallets["BCH"], this.props.prices["BCH"]);
    let etcPercent = this.getPercentage(wallets["ETC"], this.props.prices["ETC"]);

    let amountList = [btcPercent, ethPercent, ltcPercent, bchPercent, etcPercent];

    amountList = amountList.sort(this.sortNumber);
    let btcTR = this.renderTableRow(window.btc, "Bitcoin", "#FF9900", btcPercent,
    parseFloat(wallets["BTC"]).toFixed(4), "BTC", this.displayUSD((wallets["BTC"] * this.props.prices["BTC"]).toFixed(2)));

    let ethTR = this.renderTableRow(window.eth, "Ethereum", "#4169E1", ethPercent,
    parseFloat(wallets["ETH"]).toFixed(4), "ETH", this.displayUSD((wallets["ETH"] * this.props.prices["ETH"]).toFixed(2)));

    let ltcTR = this.renderTableRow(window.ltc, "Litecoin", "#b8b8b8", ltcPercent,
    parseFloat(wallets["LTC"]).toFixed(4), "LTC", this.displayUSD((wallets["LTC"] * this.props.prices["LTC"]).toFixed(2)));

    let bchTR = this.renderTableRow(window.bch, "Bitcoin Cash", "#4cca47", bchPercent,
    parseFloat(wallets["BCH"]).toFixed(4), "BCH", this.displayUSD((wallets["BCH"] * this.props.prices["BCH"]).toFixed(2)));

    let etcTR = this.renderTableRow(window.etc, "Ethereum Classic", "#00cc99", etcPercent,
    parseFloat(wallets["ETC"]).toFixed(4), "ETC", this.displayUSD((wallets["ETC"] * this.props.prices["ETC"]).toFixed(2)));

    let alreadyHappened = {
      "BTC": false,
      "ETC": false,
      "LTC": false,
      "BCH": false,
      "ETH": false
    };
    for (let i = 0; i < amountList.length; i++) {
      if (amountList[i] == btcPercent && !alreadyHappened["BTC"]) {
        listItems.push(btcTR);
        alreadyHappened["BTC"] = true;
      } else if (amountList[i] == etcPercent && !alreadyHappened["ETC"]) {
        listItems.push(etcTR);
        alreadyHappened["ETC"] = true;
      } else if (amountList[i] == ethPercent && !alreadyHappened["LTC"]) {
        listItems.push(ethTR);
        alreadyHappened["LTC"] = true;
      } else if (amountList[i] == bchPercent && !alreadyHappened["BCH"]) {
        listItems.push(bchTR);
        alreadyHappened["BCH"] = true;
      } else if (amountList[i] == ltcPercent && !alreadyHappened["ETH"]) {
        listItems.push(ltcTR);
        alreadyHappened["ETH"] = true;
      }
    }
    listItems = listItems.reverse();


    return listItems;
  }
  renderTableRow(imgLink, name, color, percentage, amount, symbol, sum) {
    let percentageImgSize = percentage;
    if (percentageImgSize <= 58){
      percentageImgSize += 8;
    }
    return (
      <div key={symbol} className="tableRowYourPortfolio">
        <div className="imgNameTD"><img className="imgYP" src={imgLink} /><p className="nameYP"> {name}</p></div>
        <div className="circlePercentageYP">
          <div
            className="circleYP" style={ {backgroundColor: color, width: (percentageImgSize) + 'px'} }>
          </div>
          <div>{percentage}%</div>
        </div>
        <div className="amountYP">{amount} {symbol}</div>
        <div className="sumYP">${sum}</div>
      </div>
    );
  }
  render() {
    let wallets = this.getWalletAmounts();
    const values = Object.values(this.props.prices);
    let boo = false;
    for (let i = 0; i < values.length; i++) {
      if (values[i] === null) {
        boo = true;
        break;
      }
    }
    if (boo) {
      return (
        <div className='loadbar'>
          <GridLoader color="#6495ED" size="10px" margin="4px"/>
        </div>
      );
    }
    const renderPortfolioValue = this.displayUSD(this.props.portfolioValue);
    return (
      <div className="YourPortfolio">
          <div className="headerTR"><p>Your Portfolio</p></div>
          {this.renderTable(wallets)}
          <div className="divTotalBalance"><p>Total Balance ≈ {renderPortfolioValue}</p></div>
      </div>
    );
  }
}

export default YourPortfolio;
