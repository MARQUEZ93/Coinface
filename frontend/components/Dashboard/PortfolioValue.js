import React from 'react';
import axios from 'axios';
import { GridLoader } from 'halogenium';
const URL = `https://min-api.cryptocompare.com/data/generateAvg?fsym=`;
const URL_END = `&tsym=USD&e=Kraken`;
class PortfolioValue extends React.Component {

  constructor(props) {
    super(props);
    this.state = { "BTC": null, "BCH": null, "ETC": null,
      "ETH": null, "LTC": null
    };
    this.getPrice = this.getPrice.bind(this);
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
    let portfolioValue;
    console.log(this.state);
    console.log(this.props.wallets);
    return <div></div>;
  }

}

export default PortfolioValue;
