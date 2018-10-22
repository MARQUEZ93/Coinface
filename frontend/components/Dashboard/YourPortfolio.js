import React from 'react';
import { GridLoader } from 'halogenium';
import _ from 'lodash';

const btcSrc = "https://www.coinbase.com/assets/assets/1-8022fd53c251f18cb39cefede445f1c78a3b265989232f0bb46b9c4622e55a9e.png";
const bchSrc = "https://www.coinbase.com/assets/assets/1831-03a53cc37436a99ba854e42df693fa52d92d88cbbce362fa217efd0e85be5e1f.png";
const etcSrc = "https://www.coinbase.com/assets/assets/1321-dbbd894924b65cc449f43c7bc7e9325e0478bbd4e9723249ac029fc6279cb55e.png";
const ethSrc = "https://www.coinbase.com/assets/assets/1027-99bf2102cc13a51bb226f931b8d0fa4c5b3ca9dc4179167e89d7ee3f677c3fdb.png";
const ltcSrc = "https://www.coinbase.com/assets/assets/2-7160750bcbc115ac8a3229bc1120fb59e96a737d607a57b42fa8e2b092a14159.png";


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
    return _.round((( (amount * price) / this.props.portfolioValue) * 100));
  }

  displayUSD(price) {
    var parts = price.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  renderTable() {
    let listItems = [];
    listItems.push(this.renderTableRow(btcSrc, "Bitcoin", "#FF9900", this.getPercentage(this.state["btcAmount"], this.props.btcPrice),
    parseFloat(this.state["btcAmount"]).toFixed(4), "BTC", this.displayUSD((this.state["btcAmount"] * this.props.btcPrice).toFixed(2)) ));

    listItems.push(this.renderTableRow(ethSrc, "Ethereum", "#4169E1", this.getPercentage(this.state["ethAmount"], this.props.ethPrice),
    parseFloat(this.state["ethAmount"]).toFixed(4), "ETH", this.displayUSD((this.state["ethAmount"] * this.props.ethPrice).toFixed(2)) ));

    listItems.push(this.renderTableRow(ltcSrc, "Litecoin", "#b8b8b8", this.getPercentage(this.state["ltcAmount"], this.props.ltcPrice),
    parseFloat(this.state["ltcAmount"]).toFixed(4), "LTC", this.displayUSD((this.state["ltcAmount"] * this.props.ltcPrice).toFixed(2)) ));

    listItems.push(this.renderTableRow(bchSrc, "Bitcoin Cash", "#4cca47", this.getPercentage(this.state["bchAmount"], this.props.bchPrice),
    parseFloat(this.state["bchAmount"]).toFixed(4), "BCH", this.displayUSD((this.state["bchAmount"] * this.props.bchPrice).toFixed(2)) ));

    listItems.push(this.renderTableRow(etcSrc, "Ethereum Classic", "#00cc99", this.getPercentage(this.state["etcAmount"], this.props.etcPrice),
    parseFloat(this.state["etcAmount"]).toFixed(4), "ETC", this.displayUSD((this.state["etcAmount"] * this.props.etcPrice ).toFixed(2))));

    return listItems;
  }
  renderTableRow(imgLink, name, color, percentage, amount, symbol, sum) {
    return (
      <div key={symbol} className="trYP">
        <div className="imgNameTD"><img className="imgYP" src={imgLink} /><p className="nameYP"> {name}</p></div>
        <div className="circlePercentageYP"><div className="circleYP"
          style={ {backgroundColor: color, width: (percentage+8) + 'px'} }></div>
        {percentage}%</div>
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
        <div className="tableYP">
            <div className="headerTR"><p>Your Portfolio</p></div>
            {this.renderTable()}
            <div className="divTotalBalance"><p>Total Balance ≈ ${renderPortfolioValue}</p></div>
        </div>
      </div>
    );
  }
}

export default YourPortfolio;
