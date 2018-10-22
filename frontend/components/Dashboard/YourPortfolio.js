import React from 'react';
import { GridLoader } from 'halogenium';

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
    return (( (amount * price) / this.props.portfolioValue) * 100);
  }

  renderTable() {
    let listItems;
    listItems+=this.renderTableRow(btcSrc, "Bitcoin", this.state["btcAmount"], this.getPercentage(this.state["btcAmount"]), this.state["btcAmount"] * this.btcPrice );
    listItems+=this.renderTableRow(ethSrc, "Ethereum", this.state["ethAmount"], this.getPercentage(this.state["ethAmount"]), this.state["ethAmount"] * this.ethPrice );
    listItems+=this.renderTableRow(ltcSrc, "Litecoin", this.state["ltcAmount"], this.getPercentage(this.state["ltcAmount"]), this.state["ltcAmount"] * this.ltcPrice );
    listItems+=this.renderTableRow(bchSrc, "Bitcoin Cash", this.state["bchAmount"], this.getPercentage(this.state["bchAmount"]), this.state["bchAmount"] * this.bchPrice );
    listItems+=this.renderTableRow(etcSrc, "Ethereum Classic", this.state["etcAmount"], this.getPercentage(this.state["etcAmount"]), this.state["etcAmount"] * this.etcPrice );
    return listItems;
  }
  renderTableRow(imgLink, name, percentage, amount, sum) {
    return (
      <tr>
        <td><img className="imgYP" src={imgLink} /></td>
        <td>{name}</td>
        <td>{percentage}</td>
        <td>{amount}</td>
        <td>{sum}</td>
      </tr>
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
    return (
      <div className="YourPortfolio">
        <p>Your Portfolio</p>
        <table>
        <tr className="yourPortfolioTR">
          <td><img className="imgYP" src={btcSrc} /></td>
          <td>Bitcoin</td>
          <td>{this.getPercentage(this.state["btcAmount"], this.props.btcPrice)} </td>
          <td>{this.state["btcAmount"]}</td>
          <td>{this.state["btcAmount"] * this.props.btcPrice}</td>
        </tr>
        </table>
      </div>
    );
  }
}

export default YourPortfolio;
