import React, { Component } from 'react';
import { GridLoader } from 'halogenium';
import AddCard from './AddCard';

const houseSVG = <svg className="houseSVG" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
  viewBox="0 0 18 18">
  <path d="M17.25 7.538c.45 0 .75-.3.75-.75v-1.5c0-.3-.15-.526-.375-.675l-8.25-4.5a.681.681 0 0 0-.75 0l-8.25 4.5A.788.788 0 0 0 0 5.287v1.5c0 .45.3.75.75.75h1.5v8.25H.75c-.45 0-.75.3-.75.75s.3.75.75.75h16.5c.45 0 .75-.3.75-.75s-.3-.75-.75-.75h-1.5v-8.25h1.5zm-9.75 8.25H5.25v-8.25H7.5v8.25zM9 6.038c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5zm3.75 9.75H10.5v-8.25h2.25v8.25z">
  </path></svg>;

const addSVG = <svg className="addCardSVG"
  xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
  <path d="M8.588.415c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z">
  </path></svg>

class BuyAsset extends Component {
  constructor(props) {
    super(props);
    this.renderBuyAsset = this.renderBuyAsset.bind(this);
    this.state = {currentAsset: "BTC", showPopup: false};
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.renderCryptocurrency = this.renderCryptocurrency.bind(this);
    this.renderCryptocurrenies = this.renderCryptocurrenies.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
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
  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
 }
  renderCard(){
    let id = this.props.id;
    let name = this.props.firstName + " " + this.props.middleName + " " + this.props.lastName;
    return (
      <div>
        <div onClick={this.togglePopup} className="addCardDiv">
          <div className="addCardText">
            {addSVG} <p className="addCardTextP">Add a new account</p>
          </div>
        </div>
        {this.state.showPopup?
          <AddCard processCard={this.props.processCard}
            closePopup={this.togglePopup} name={name} id={id} />: null}
    </div>
    );
  }
  hasCard(card){
    return (
      <div>
        <div className="hasCardDiv">
          <div className="addCardText">
            {houseSVG}
            <div className="cardInfoDiv">
              <p className="cardInfoType">{card.type}</p>
              <p className="cardInfoNumber">Checking: ********{card.last_four_digits}</p>
            </div>

          </div>

        </div>
        <p className="deleteCardP" onClick={this.props.deleteCard}>Remove your card on file</p>
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
          <form>
            {this.renderCryptocurrenies()}
          </form>
        </div>
        <p className="BuyCryptocurrencyAssetP">Payment Method</p>
        {this.props.card !== null ? this.hasCard(this.props.card) :
          this.renderCard}
    </div>
    );
  }
  render() {
    console.log(this.props);
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

export default BuyAsset;
