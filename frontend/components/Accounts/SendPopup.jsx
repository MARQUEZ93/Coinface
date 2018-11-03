import React, { Component } from 'react';
import { connect } from 'react-redux';
import { processTransfer } from '../../actions/session_actions';

const xSVG = <svg className="xSymbol" xmlns="http://www.w3.org/2000/svg"
  width="20" height="20" viewBox="0 0 20 20">
  <path d="M18.096 19.174l1.401-1.427L1.7.286.3 1.714z"></path>
  <path d="M19.497 1.714L18.096.286.3 17.747l1.4 1.427z">
  </path></svg>;

const equalsSVG = <svg className="equalsSVG"
  ui="[object Object]" xmlns="http://www.w3.org/2000/svg" width="21" height="22"
  viewBox="0 0 21 22">
  <path className="equalsSVGpath" d="M20 14.8a.8.8 0 1 0 0-1.6H1a.8.8 0 0 0-.58 1.351l6.65 7a.8.8 0 0 0 1.16-1.102L2.863 14.8H20zM1 7.2a.8.8 0 1 0 0 1.6h19a.8.8 0 0 0 .58-1.351l-6.65-7a.8.8 0 1 0-1.16 1.102L18.137 7.2H1z">
</path></svg>;

class SendPopup extends Component {

  constructor(props){
    super(props);
    this.state = {
      cash_amount: "",
      amount: "",
      usdError:false,
      assetError:false,
      addressError:false,
      note:"",
      receiver_wallet_address:"",
      negativeError: false,
      provideNote: false
    }
    this.updateInputs = this.updateInputs.bind(this);
    this.methodInState = this.methodInState.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateAddress = this.updateAddress.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  methodInState(field, e) {
    e.preventDefault();
    let otherState = "cash_amount";
    if (field == "cash_amount") {
      otherState = "amount";
      //prevent negative submission
      if (parseFloat(e.currentTarget.value) > this.props.cashAmount){
        this.setState({ usdError: true });
      } else if (parseFloat(e.currentTarget.value) < 0) {
        this.setState( { negativeError : true } );
      } else {
        if (this.state.usdError) {
          this.setState({ usdError: false });
        }
        if (this.state.assetError) {
          this.setState({ usdError: false, amount: "" });
        }
        if (this.state.negativeError) {
          this.setState( {negativeError: false });
        }
      }
    } else {
      if (parseFloat(e.currentTarget.value) > this.props.walletAmount) {
        this.setState({ assetError: true });
      } else if (parseFloat(e.currentTarget.value) < 0) {
        this.setState( { negativeError : true } );
      } else {
        if (this.state.assetError) {
          this.setState({ assetError: false });
        }
        if (this.state.usdError) {
          this.setState({ usdError: false, cash_amount:"" });
        }
        if (this.state.negativeError) {
          this.setState( {negativeError: false });
        }
      }
    }
    let getProduct;
    if (otherState == "amount") { //user is typing into usd input
      getProduct = parseFloat(e.currentTarget.value) / this.props.currentPrice;
    } else { //user is typing into asset input
      getProduct = parseFloat(e.currentTarget.value) * this.props.currentPrice;
    }
    if (e.currentTarget.value == "") {
      return "";
    }
    if (field == "cash_amount") {
      return getProduct.toFixed(6);
    }
    return getProduct.toFixed(2);
  }

  updateInputs(field) {
    let otherState = "cash_amount";
    if (field == "cash_amount") {
      otherState = "amount";
    }
    return e => this.setState({
      [field]: e.currentTarget.value,
      [otherState]: this.methodInState(field, e)
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  changeState(field, e){
    e.preventDefault();
    if (e.currentTarget.value.length < 32 && e.currentTarget.value.length > 0 ) {
      this.setState( {
        addressError: true
      })
    } else if (this.state.addressError) {
      this.setState({
        addressError: false
      })
    }
    return e.currentTarget.value;
  }

  updateAddress(field) {
    return e => this.setState({
      [field]: this.changeState(field, e)
    });
  }

  handleSubmit(e){
    e.preventDefault();
    //don't let invalid post attempts
    if (!this.state.assetError && !this.state.usdError &&
      !this.state.addressError && !this.state.negativeError
      && this.state.amount != "NaN" && this.state.cash_amount != "NaN" &&
      /\S/.test(this.state.note)) {
      let transferObject = {
        cash_amount: this.state.cash_amount,
        amount: this.state.amount,
        note: this.state.note,
        receiver_wallet_address: this.state.receiver_wallet_address,
        asset_type: this.props.symbol,
        sender_wallet_address: this.props.walletAddress
      };
      const transfer = Object.assign({}, transferObject);
      this.props.processTransfer(transfer).then(res => {
        this.props.closePopup(false);
      });
    }
    else if (!/\S/.test(this.state.note)){
      this.setState({provideNote: true });
    }
  }

  render() {
    let symbol = this.props.symbol;
    let placeholder = "Enter a " + symbol + " address";
    let usdAmountPlaceholder = "0.00                   USD";
    let assetAmountPlaceholder = "0.00                   " + symbol;
    const pStyle = {
      color: this.props.color
    };
    const buttonStyle = {
      backgroundColor: this.props.color
    };
    let emptyNote= <p className="emptyNote">Provide a note please.</p>;
    let nonInteger= <p className="invalidError">Type only numbers please.</p>;
    let invalidTransfer= <p className="invalidError">{this.props.transferError}</p>;
    let negativeAmount= <p className="negativeError">NOT GONNA HAPPEN</p>;
    let improperAddress= <p className="addressError">Please enter a valid {symbol} address</p>;
    let amountError = <p className="amountError">You {"do"} not have enough funds to send at {"this"} amount.</p>;
    let availablePlaceholder = (
      <div className="availablePlaceholder">
        <div className="availablePlaceholderFirstHalf">
          <img className="availablePlaceholderImg" src={this.props.img}/>
          <p>My</p><p style={pStyle} className="pstyle">{symbol}</p><p>wallet</p>
        </div>
        <div className="availablePlaceholderSecondHalf">
          <div className="amountsAvailable">
            <div className="amountsAvailableDiv">
              <p className="assetAmountAvailable">{this.props.walletAmount}</p>
              <p style={pStyle} className="pstyle">{symbol}</p>
            </div>
            <p className="assetUSDAmountAvailable">{` ≈ $`}{this.props.cashAmount}</p>
          </div>
        </div>
      </div>
    );
    return (
      <div className='SendPopup'>
        <div className='popup_inner'>
          <div className="firstLinePopup">
            <div className="symbolPopUp">
              <p>Send</p><p className="pstyle" style={pStyle}>{symbol}</p>
            </div>
            <button className="closePopupButton" onClick={() => this.props.closePopup(false)}>{xSVG}</button>
          </div>
          <div className="inputReceipientDiv">
            Recipient <input onChange={this.updateAddress('receiver_wallet_address')} className="inputReceipient" placeholder={placeholder}></input>
            {this.state.addressError ? improperAddress:null}
          </div>
          <div className="inputReceipientDiv">
            Available to send {availablePlaceholder}
          </div>
          <div className="inputsAmountsDiv">
            <div className="typesIdentifiersPopup">
              <div className="titleInputsAmountsDiv"><p>Amount</p></div>
            </div>
            <div className="twoIdentifiers">
              <p className="usdAmountIdentifier">USD</p>
              <p style={pStyle} className="assetAmountIdentifier">{symbol}</p>
            </div>
            <div className="usdAssetInputsDiv">
              <input value={this.state.cash_amount} onChange={this.updateInputs('cash_amount')} className="inputUSDAmount" placeholder={usdAmountPlaceholder}></input>
              {equalsSVG}
              <input value={this.state.amount} onChange={this.updateInputs('amount')}  className="inputAssetAmount" placeholder={assetAmountPlaceholder}></input>
            </div>
            {this.state.usdError || this.state.assetError ? amountError: null}
            {this.state.negativeError ? negativeAmount: null}
            {this.props.transferError.length == 1 ? invalidTransfer: null}
            {this.state.amount == "NaN" || this.state.cash_amount == "NaN" ? nonInteger: null}
          </div>
          <div className="inputNoteDiv">
            Note <input onChange={this.update('note')} className="inputNote" placeholder={"Write a message"}></input>
          </div>
          {this.state.provideNote ? emptyNote: null}
          <button style={buttonStyle} onClick={this.handleSubmit} className="buttonSendTransactionDiv">Send</button>
        </div>
      </div>
    );
  }
}

const mdp = (dispatch) => (
  {
    processTransfer: (transfer) => dispatch(processTransfer(transfer))
  }
);


const msp = ({ errors }) => (
  {
    transferError: errors.transfer
  }
);

export default connect(msp, mdp)(SendPopup);
