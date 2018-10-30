import React from 'react';
import { GridLoader } from 'halogenium';
import _ from 'lodash';

class YourPortfolio extends React.Component {

  constructor(props) {
    super(props);
    this.state = { "btcAmount": null, "etcAmount": null,
      "ethAmount": null, "bchAmount": null, "ltcAmount": null, "gotAmounts": false };
    this.getAmounts = this.getAmounts.bind(this);
    this.renderTableRow = this.renderTableRow.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  componentDidMount() {
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

  renderTable() {
    let listItems = [];
    let btcPercent = this.getPercentage(this.state["btcAmount"], this.props.btcPrice);
    let ethPercent = this.getPercentage(this.state["ethAmount"], this.props.ethPrice);
    let ltcPercent = this.getPercentage(this.state["ltcAmount"], this.props.ltcPrice);
    let bchPercent = this.getPercentage(this.state["bchAmount"], this.props.bchPrice);
    let etcPercent = this.getPercentage(this.state["etcAmount"], this.props.etcPrice);

    let amountList = [btcPercent, ethPercent, ltcPercent, bchPercent, etcPercent];

    amountList = amountList.sort(this.sortNumber);
    console.log(amountList);
    let btcTR = this.renderTableRow(window.btc, "Bitcoin", "#FF9900", btcPercent,
    parseFloat(this.state["btcAmount"]).toFixed(4), "BTC", this.displayUSD((this.state["btcAmount"] * this.props.btcPrice).toFixed(2)));

    let ethTR = this.renderTableRow(window.eth, "Ethereum", "#4169E1", ethPercent,
    parseFloat(this.state["ethAmount"]).toFixed(4), "ETH", this.displayUSD((this.state["ethAmount"] * this.props.ethPrice).toFixed(2)));

    let ltcTR = this.renderTableRow(window.ltc, "Litecoin", "#b8b8b8", ltcPercent,
    parseFloat(this.state["ltcAmount"]).toFixed(4), "LTC", this.displayUSD((this.state["ltcAmount"] * this.props.ltcPrice).toFixed(2)));

    let bchTR = this.renderTableRow(window.bch, "Bitcoin Cash", "#4cca47", bchPercent,
    parseFloat(this.state["bchAmount"]).toFixed(4), "BCH", this.displayUSD((this.state["bchAmount"] * this.props.bchPrice).toFixed(2)));

    let etcTR = this.renderTableRow(window.etc, "Ethereum Classic", "#00cc99", etcPercent,
    parseFloat(this.state["etcAmount"]).toFixed(4), "ETC", this.displayUSD((this.state["etcAmount"] * this.props.etcPrice ).toFixed(2)));

    for (let i = 0; i < amountList.length; i++) {
      if (amountList[i] == btcPercent) {
        listItems.push(btcTR);
      } else if (amountList[i] == etcPercent) {
        listItems.push(etcTR);
      } else if (amountList[i] == ethPercent) {
        listItems.push(ethTR);
      } else if (amountList[i] == bchPercent) {
        listItems.push(bchTR);
      } else if (amountList[i] == ltcPercent) {
        listItems.push(ltcTR);
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
    if (!this.state["gotAmounts"]) {
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
          {this.renderTable()}
          <div className="divTotalBalance"><p>Total Balance ≈ ${renderPortfolioValue}</p></div>
      </div>
    );
  }
}

export default YourPortfolio;
