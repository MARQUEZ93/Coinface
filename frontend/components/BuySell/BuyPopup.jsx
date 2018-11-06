import React, { Component } from 'react';

class BuyPopup extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }
  getPrice(symbol){
    if (symbol === "BTC") {
      return this.props.btcPrice;
    } else if (symbol === "BCH") {
      return this.props.bchPrice;
    } else if (symbol === "ETH") {
      return this.props.ethPrice;
    } else if (symbol === "ETC") {
      return this.props.etcPrice;
    } else if (symbol === "LTC") {
      return this.props.ltcPrice;
    }
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
  getCashAmount(symbol){
    let price = this.getPrice(symbol);
    const numberWithCommas = (num) => {
      var parts = num.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    return (numberWithCommas(price));
  }
  renderCryptocurrency(symbol){
    let img = this.getImage(symbol);
    let name = this.getName(symbol);
    let cashAmount = this.getCashAmount(symbol);
    return (
      <div className="BuyCryptocurrencyRow">
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
    );
  }
  renderList(){
    let list = [this.renderCryptocurrency(this.props.currentAsset)];
    let newLi = this.getList();
    for (let i = 0; i < newLi.length; i++) {
      list.push(this.renderCryptocurrency(newLi[i]));
    }
    return list;
  }
  //list of non-currentAsset assets
  getList(){
    let assets = {"BTC": null, "LTC": null, "BCH":null, "ETH":null, "ETC": null};
    let array = Object.keys(assets);
    for (let i = 0; i < array.length; i++) {
      if (array[i]==this.props.currentAsset){
        delete assets[array[i]];
        break;
      }
    }
    return Object.keys(assets).sort();
  }
  render(){
    return (
      this.renderList()
    )
  }
}
export default BuyPopup;
