import React, { Component } from 'react';
import { GridLoader } from 'halogenium';
import axios from 'axios';
import Transactions from './Transactions';
import SendPopup from './SendPopup';
import WalletAddress from './WalletAddress';
import { connect } from 'react-redux';
import { clearTransferErrors } from '../../actions/session_actions';

const URL = `https://min-api.cryptocompare.com/data/generateAvg?fsym=`;
const URL_END = `&tsym=USD&e=Kraken`;

const sendSVG = <svg
  className="sendSVG"
  xmlns="http://www.w3.org/2000/svg"
  width="16" height="16" viewBox="0 0 16 16">
  <path d="M15.707.293a1 1 0 0 0-1.043-.234l-14 5a.999.999 0 0 0-.111 1.835l4.586 2.292L11 5l-4.187 5.862 2.292 4.586a1.004 1.004 0 0 0 1.838-.112l5-14c.129-.363.037-.77-.236-1.043z">
  </path></svg>;

const receiveSVG = <svg
  className="receiveSVG"
  xmlns="http://www.w3.org/2000/svg"
  width="14" height="14" viewBox="0 0 14 14">
  <path d="M6.417 6.417H0V0h6.417v6.417zM1.167 5.25H5.25V1.167H1.167V5.25zM14 6.417H7.583V0H14v6.417zM8.75 5.25h4.083V1.167H8.75V5.25zM6.417 14H0V7.583h6.417V14zm-5.25-1.167H5.25V8.75H1.167v4.083zM14 11.667h-1.167V8.75h-1.166v1.75h-3.5V7.583h1.166v1.75H10.5v-1.75H14zM14 14H8.167v-2.333h1.166v1.166H14z"></path><path d="M2.333 2.333h1.75v1.75h-1.75zM9.917 2.333h1.75v1.75h-1.75zM2.333 9.917h1.75v1.75h-1.75z">
  </path></svg>;

class YourAccountWallets extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "BTC": null, "BCH": null, "ETC": null,
      "ETH": null, "LTC": null, "btcAmount": null, "etcAmount":null,
      "ethAmount": null, "bchAmount":null, "ltcAmount":null,
      "currentWallet": "BTC", showPopUp: false, showBarcode: false
    };
    this.getPrice = this.getPrice.bind(this);
    this.getValue = this.getValue.bind(this);
    this.getAmounts = this.getAmounts.bind(this);
    this.renderWallet = this.renderWallet.bind(this);
    this.changeWallet = this.changeWallet.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.toggleBarcode= this.toggleBarcode.bind(this);
  }

  componentDidMount() {
    this.getPrice("BTC");
    this.getPrice("BCH");
    this.getPrice("ETC");
    this.getPrice("ETH");
    this.getPrice("LTC");
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

  getValue(wallet) {
    const asset = wallet.asset_type;
    return (this.state[asset] * wallet.amount);
  }

  togglePopup(symbol) {
    if (symbol == false){
      this.props.clearTransfersErrors();
    }
    this.setState({ showPopup: symbol });
 }

 toggleBarcode(symbol) {
   this.setState({ showBarcode: symbol });
}

  renderWallet(symbol, img, wallet) {

    let address = wallet.address;

    let colorsHash = {"BTC": "#FF9900", "ETC":"#00cc99", "LTC":"#b8b8b8", "ETH":"#4169E1", "BCH":"#4cca47"};

    let className = "accountWallet";
    let currentPrice = this.state[symbol];

    if (symbol === this.state["currentWallet"]) {
      className = "selectedWallet";
    }
    //price * amount
    let walletAmount = parseFloat(wallet.amount).toFixed(4);
    let cashAmount = (currentPrice * wallet.amount);

    cashAmount = cashAmount.toFixed(2);
    const numberWithCommas = (num) => {
      var parts = num.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
    const floorWithCommas = numberWithCommas(cashAmount);

    return (
        <div className="accountWallet" className={className} onClick={()=>this.changeWallet(symbol)}>
          <div className="imgDescriptionYA">
            <img className="imgWalletYA" src={img} />
            <div className="descriptionWalletYA">
              <p className="accountTextTop">{symbol} Wallet</p>
              <div className="accountTextBottom">
                <p className="accountTextAmount">{walletAmount}</p>
                <p className="accountTextEqualSign">{` ≈ `}</p>
                <p className="accountTextCashAmount">{"$"}{floorWithCommas}</p>
              </div>
            </div>
          </div>
          <div className="buttonsDivYA">
            <button onClick={()=> this.togglePopup(symbol)} className="buttonYA">{sendSVG}Send</button>
            <button className="buttonYA" onClick={()=> this.toggleBarcode(symbol)} >{receiveSVG}Receive</button>
          </div>
          { this.state.showPopup == symbol ?
           <SendPopup walletAddress={address} cashAmount={cashAmount} floorWithCommas={floorWithCommas}
           walletAmount={walletAmount} symbol={symbol} img={img} color={colorsHash[symbol]}
           closePopup={this.togglePopup} currentPrice={currentPrice} processTransfer={this.props.processTransfer} />
            : null
         }
         { this.state.showBarcode == symbol ?
          <WalletAddress closePopup={this.toggleBarcode} address={address}
            symbol={symbol} color={colorsHash[symbol]} />
          : null
        }
        </div>
    );
  }

  changeWallet(symbol) {
    this.setState( { "currentWallet": symbol });
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
          <GridLoader className="GridLoader" />
        </div>
      );
    }

    const wallets = this.props.wallets;
    let BTCwallet; let BCHwallet; let ETCwallet; let ETHwallet; let LTCwallet;
    for (let i = 0; i < wallets.length; i++) {
      if (wallets[i].asset_type === "BTC") {
        BTCwallet = wallets[i];
      } else if (wallets[i].asset_type === "BCH") {
        BCHwallet = wallets[i];
      } else if (wallets[i].asset_type === "ETH") {
        ETHwallet = wallets[i];
      } else if (wallets[i].asset_type === "ETC") {
        ETCwallet = wallets[i];
      } else if (wallets[i].asset_type === "LTC") {
        LTCwallet = wallets[i];
      }
    }

    const currentWallet = this.state["currentWallet"];
    let transactionWallet;
    if (currentWallet === "BTC") {
      transactionWallet = BTCwallet;
    } else if (currentWallet === "BCH") {
      transactionWallet = BCHwallet;
    } else if (currentWallet === "ETH") {
      transactionWallet = ETHwallet;
    } else if (currentWallet === "ETC") {
      transactionWallet = ETCwallet;
    } else if (currentWallet === "LTC") {
      transactionWallet = LTCwallet;
    }
    return (
      <div className="walletTransactions">
        <div className="YourAccountWallets">
          {this.renderWallet("BTC", window.btc, BTCwallet)}
          {this.renderWallet("BCH", window.bch, BCHwallet)}
          {this.renderWallet("ETH", window.eth, ETHwallet)}
          {this.renderWallet("ETC", window.etc, ETCwallet)}
          {this.renderWallet("LTC", window.ltc, LTCwallet)}
        </div>
        <Transactions symbol={this.state["currentWallet"]} />
      </div>
    );
  }
}

const msp = ({ session }) => (
  {
    wallets: session.wallets, transfers: session.transfers,
    sellings: session.sellings, purchases: session.purchases,
    receivers: session.receivers
  }
);

const mdp = (dispatch) => (
  {
    clearTransfersErrors: () => dispatch(clearTransferErrors())
  }
);


export default connect(msp,mdp)(YourAccountWallets);
