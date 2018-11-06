import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GridLoader } from 'halogenium';
import { getPrice } from '../../actions/prices_actions';
import BuyPopup from './BuyPopup';

const scrollSVG = <svg
  className="scrollSVG" xmlns="http://www.w3.org/2000/svg"
  width="9" height="14" viewBox="0 0 9 14">
  <path d="M4.5 14a.47.47 0 0 1-.325-.134l-3.88-3.694.651-.844L4.5 12.713l3.554-3.385.651.844-3.88 3.694A.47.47 0 0 1 4.5 14zm3.554-9.295L4.5 1.659.946 4.704l-.651-.76L4.175.62a.5.5 0 0 1 .65 0l3.88 3.326-.651.759z">
  </path></svg>;

class BuyAsset extends Component {
  constructor(props) {
    super(props);
    this.renderBuyAsset = this.renderBuyAsset.bind(this);
    this.state = {currentAsset: "BTC", buyPopup: false};
    this.toggleBuyPopup = this.toggleBuyPopup.bind(this);
  }

  componentDidMount() {
    this.props.getPrice("BTC");
    this.props.getPrice("LTC");
    this.props.getPrice("BCH");
    this.props.getPrice("ETH");
    this.props.getPrice("ETC");
  }
  toggleBuyPopup(){
    this.setState( { buyPopup: !this.state.buyPopup });
  }
  getImage() {
    if (this.state.currentAsset === "BTC") {
      return window.btc;
    } else if (this.state.currentAsset === "BCH") {
      return window.bch;
    } else if (this.state.currentAsset === "ETH") {
      return window.eth;
    } else if (this.state.currentAsset === "ETC") {
      return window.etc;
    } else if (this.state.currentAsset === "LTC") {
      return window.ltc;
    }
  }
  getName() {
    if (this.state.currentAsset === "BTC") {
      return "Bitcoin";
    } else if (this.state.currentAsset === "BCH") {
      return "Bitcoin Cash";
    } else if (this.state.currentAsset === "ETH") {
      return "Ethereum";
    } else if (this.state.currentAsset === "ETC") {
      return "Ethereum Classic";
    } else if (this.state.currentAsset === "LTC") {
      return "Litecoin";
    }
  }
  getCashAmount(){
    let cashAmount = this.props.prices[this.state.currentAsset];
    const numberWithCommas = (num) => {
      var parts = num.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    return (numberWithCommas(cashAmount));
  }
  renderCryptocurrency(){
    let img = this.getImage();
    let name = this.getName();
    let cashAmount = this.getCashAmount()
    return (
      <div className="BuyCryptocurrencyRow">
          <div className="BCRImageNames">
            <img className="BCRImage" src={img} />
            <div className="BCRNames">
              <p className="BCRName">{name}</p>
              <p className="BCRSymbol">{this.state.currentAsset}</p>
            </div>
          </div>
          <div className="BCRPrice">
            <p>@ ${cashAmount}</p>
          </div>
      </div>
    );
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
          {this.renderCryptocurrency()}
          <div onClick={this.toggleBuyPopup} className="scrollDiv">{scrollSVG}</div>
        </div>
        {this.state.buyPopup ?
          <BuyPopup currentAsset={this.state.currentAsset} btcPrice={this.props.prices["BTC"]}
            etcPrice={this.props.prices["ETC"]}
            ethPrice={this.props.prices["ETH"]}
            ltcPrice={this.props.prices["LTC"]}
            bchPrice={this.props.prices["BCH"]}
            />: null}
      </div>
    );

  }
  render() {
    if (!this.props.prices[this.state.currentAsset]){
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
