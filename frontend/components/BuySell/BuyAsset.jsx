import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridLoader } from 'halogenium';
import { getPrice } from '../../actions/prices_actions';

class BuyAsset extends Component {
  constructor(props) {
    super(props);
    this.renderBuyAsset = this.renderBuyAsset.bind(this);
    this.state = {currentAsset: "BTC"};
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.renderCryptocurrency = this.renderCryptocurrency.bind(this);
    this.renderCryptocurrenies = this.renderCryptocurrenies.bind(this);
  }

  componentDidMount() {
    this.props.getPrice("BTC");
    this.props.getPrice("LTC");
    this.props.getPrice("BCH");
    this.props.getPrice("ETH");
    this.props.getPrice("ETC");
  }
  getImage(symbol) {
    if (symbol === "BTC") {
      return window.btc;
    } else if (symbol === "BCH") {
      return window.bch;
    } else if (symbol === "ETH") {
      return window.eth;
    } else if (symbol === "ETC") {
      return window.etc;
    } else if (symbol === "LTC") {
      return window.ltc;
    }
  }
  getName(symbol) {
    if (symbol === "BTC") {
      return "Bitcoin";
    } else if (symbol === "BCH") {
      return "Bitcoin Cash";
    } else if (symbol === "ETH") {
      return "Ethereum";
    } else if (symbol === "ETC") {
      return "Ethereum Classic";
    } else if (symbol === "LTC") {
      return "Litecoin";
    }
  }
  getColor(symbol) {

    if (symbol === "BTC") {
      return "rgb(247, 147, 26)";
    } else if (symbol === "BCH") {
      return "rgb(141, 195, 81)";
    } else if (symbol === "ETC") {
      return "#0FDF8E";
    } else if (symbol === "ETH") {
      return "rgb(98, 126, 234)";
    } else if (symbol === "LTC") {
      return "rgb(191, 187, 187)";
    }
  }
  getCashAmount(symbol){
    let cashAmount = this.props.prices[symbol];
    const numberWithCommas = (num) => {
      var parts = num.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    return (numberWithCommas(cashAmount));
  }
  handleRadioChange(e){
    this.setState({
      currentAsset: e.target.value
    });
  }
  renderCryptocurrency(symbol){
    const pStyle = {
      backgroundColor: this.getColor(symbol)
    };
    let img = this.getImage(symbol);
    let name = this.getName(symbol);
    let cashAmount = this.getCashAmount(symbol);
    return (
      <div className="BCRRowAndInput" key={symbol}>
        <div className="BuyCryptocurrencyRow" style={pStyle}>
            <div className="BCRImageNames">
              <img className="BCRImage" src={img} />
              <div className="BCRNames">
                <p className="BCRName">{name}</p>
                <p className="BCRSymbol">{symbol}</p>
              </div>
            </div>
            <div className="BCRPrice">
              <p>@ ${cashAmount}</p>
            </div>
        </div>
        <input onChange={this.handleRadioChange} type="radio" value={symbol}
          name={symbol} checked={this.state.currentAsset == symbol} className="BCRInput" />
       </div>
    );
  }
  renderCryptocurrenies() {
    let list = [ this.renderCryptocurrency("BTC"), this.renderCryptocurrency("BCH"),
    this.renderCryptocurrency("ETH"), this.renderCryptocurrency("ETC"),
    this.renderCryptocurrency("LTC") ];
    return list;
  }
  renderBuyAsset() {
    return (
      <div className="BuyAsset">
        <div className="BuyAssetNavBar">
          <div className="BuyNav"><p>Buy</p></div>
          <div className="SellNav"><p>Sell</p></div>
        </div>
        <p className="BuyCryptocurrencyAssetP">Cryptocurrency</p>
        <div className="BuyCryptocurrency">
          <form>
            {this.renderCryptocurrenies()}
          </form>
        </div>
        <p className="BuyCryptocurrencyAssetP">Payment Method</p>
        <div className="BuyCryptocurrency">
        </div>
    </div>
    );
  }
  render() {
    if (Object.values(this.props.prices).includes(null)) {
      return (
        <div className='loadbar'>
          <GridLoader color="#6495ED" size="10px" margin="4px"/>
        </div>
      )
    }
    return (
      <div className="BuyAssetYouAreBuying">
        {this.renderBuyAsset()}
      </div>
    );
  }
}

const mdp = ( dispatch ) => (
  {
    getPrice: (symbol) => dispatch(getPrice(symbol))
  }
);


const msp = ({ entities }) => (
  {
    prices: entities.currentPrices
  }
);


export default connect(msp, mdp)(BuyAsset);
