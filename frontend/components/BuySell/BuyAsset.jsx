import React, { Component } from 'react';
import { GridLoader } from 'halogenium';
import AddCard from './AddCard';

const houseSVG = <div className="houseSVGDiv"><svg className="houseSVG" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
  viewBox="0 0 18 18">
  <path d="M17.25 7.538c.45 0 .75-.3.75-.75v-1.5c0-.3-.15-.526-.375-.675l-8.25-4.5a.681.681 0 0 0-.75 0l-8.25 4.5A.788.788 0 0 0 0 5.287v1.5c0 .45.3.75.75.75h1.5v8.25H.75c-.45 0-.75.3-.75.75s.3.75.75.75h16.5c.45 0 .75-.3.75-.75s-.3-.75-.75-.75h-1.5v-8.25h1.5zm-9.75 8.25H5.25v-8.25H7.5v8.25zM9 6.038c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5 1.5.675 1.5 1.5-.675 1.5-1.5 1.5zm3.75 9.75H10.5v-8.25h2.25v8.25z">
  </path></svg></div>;

const addSVG = <svg className="addCardSVG"
  xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
  <path d="M8.588.415c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z">
  </path></svg>;

  const visaSVG = <svg className="visaSVG" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><path fill="#2B3894"
    d="M11.285 20.629l1.61-9.967h2.573l-1.61 9.967h-2.573M23.194 10.906a6.374 6.374 0 0 0-2.306-.419c-2.545 0-4.336 1.353-4.35 3.29-.017 1.433 1.277 2.232 2.253 2.708 1.003.488 1.34.8 1.336 1.237-.007.667-.8.973-1.54.973-1.03 0-1.578-.15-2.425-.522l-.33-.16-.36 2.232c.6.278 1.712.519 2.867.531 2.704 0 4.46-1.336 4.481-3.404.01-1.136-.676-1.998-2.161-2.709-.9-.462-1.452-.768-1.445-1.236 0-.414.466-.857 1.474-.857a4.522 4.522 0 0 1 1.926.382l.231.115.349-2.161M26.62 17.095c.214-.573 1.026-2.786 1.026-2.786-.015.026.212-.578.342-.951l.174.86s.494 2.378.595 2.877h-2.136zm3.176-6.424h-1.99c-.616 0-1.078.177-1.348.826l-3.822 9.135h2.703s.441-1.229.541-1.499l3.297.006c.077.347.313 1.493.313 1.493h2.389l-2.083-9.96zM9.126 10.67l-2.52 6.795-.27-1.381c-.469-1.592-1.93-3.317-3.564-4.181l2.304 8.717L7.8 20.62l4.053-9.95H9.126">
  </path><path fill="#F79510" d="M4.268 10.662H.118l-.034.207c3.23.826 5.366 2.819 6.253 5.214l-.902-4.58c-.156-.631-.608-.818-1.167-.84"></path></g></svg>;

  const masterCardSVG = <svg className="masterCardSVG"
    xmlns="http://www.w3.org/2000/svg" width="32" height="32"
    viewBox="0 0 32 32"><g fill="none" transform="translate(0 7)">
    <ellipse cx="9.119" cy="9.412" fill="#EB001B" rx="9.119"
      ry="9.412"></ellipse><ellipse cx="22.799" cy="9.412"
      fill="#F79E1B" rx="9.119" ry="9.412"></ellipse>
  <path fill="#FF5F00" d="M15.96 15.637a9.55 9.55 0 0 0 2.279-6.225 9.55 9.55 0 0 0-2.28-6.226 9.55 9.55 0 0 0-2.28 6.226 9.55 9.55 0 0 0 2.28 6.225z">
  </path></g></svg>;

class BuyAsset extends Component {
  constructor(props) {
    super(props);
    this.renderBuyAsset = this.renderBuyAsset.bind(this);
    this.state = {currentAsset: "BTC", showPopup: false};
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.renderCryptocurrency = this.renderCryptocurrency.bind(this);
    this.renderCryptocurrenies = this.renderCryptocurrenies.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.hasCard = this.hasCard.bind(this);
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
  addCard(){
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
          <AddCard addCard={this.props.addCard}
            closePopup={this.togglePopup} name={name} id={id} />: null}
    </div>
    );
  }
  hasCard(){
    let cardType = visaSVG;
    let card = this.props.card;
    if (card.card_type == "Mastercard") {
      cardType = masterCardSVG;
    }
    return (
      <div>
        <div className="hasCardDiv">
          <div className="addCardText">
            {houseSVG}
            <div className="cardInfoDiv">
              {cardType}
              <p className="cardInfoNumber">Card Number: ************{card.last_four_digits}</p>
            </div>

          </div>

        </div>
        <p className="deleteCardP" onClick={this.props.destroyCard}>Click here to remove your card on file</p>
    </div>
    );

  }
  renderBuyAsset() {
    let card = this.props.card;
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
        {this.props.card !== null ? this.hasCard() :
          this.addCard()}
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
