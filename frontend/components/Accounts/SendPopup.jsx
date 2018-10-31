import React, { Component } from 'react';

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
      note:"",
      receiver_wallet_address:""
    }
    this.updateInputs = this.updateInputs.bind(this);
    this.methodInState = this.methodInState.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  methodInState(field, e) {
    let otherState = "cash_amount";
    if (field == "cash_amount") {
      otherState = "amount";
      if (parseFloat(e.currentTarget.value) > this.props.cashAmount){
        this.setState({ usdError: true });
      } else {
        if (this.state.usdError) {
          this.setState({ usdError: false });
        }
      }
    } else {
      if (parseFloat(e.currentTarget.value) > this.props.walletAmount){
        this.setState({ assetError: true });
      } else {
        if (this.state.assetError) {
          this.setState({ assetError: false });
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

  handleSubmit(e){
    e.preventDefault();
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
      this.props.closePopup();
    });
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
            <button className="closePopupButton" onClick={this.props.closePopup}>{xSVG}</button>
          </div>
          <div className="inputReceipientDiv">
            Recipient <input onChange={this.update('receiver_wallet_address')} className="inputReceipient" placeholder={placeholder}></input>
          </div>
          <div className="inputReceipientDiv">
            Available to send {availablePlaceholder}
          </div>
          <div className="inputsAmountsDiv">
            Amount
            <div className="usdAssetInputsDiv">
              <div className="usdAmountIdentifierDiv">
                <p className="usdAmountIdentifier">USD</p>
                <input value={this.state.cash_amount} onChange={this.updateInputs('cash_amount')} className="inputUSDAmount" placeholder={usdAmountPlaceholder}></input>
              </div>
              <div className="SymbolusdAssetInputsDiv">{equalsSVG}</div>
              <div className="assetAmountIdentifierDiv">
                <p style={pStyle} className="assetAmountIdentifier">{symbol}</p>
                <input value={this.state.amount} onChange={this.updateInputs('amount')}  className="inputAssetAmount" placeholder={assetAmountPlaceholder}></input>
              </div>
            </div>
            {this.state.usdError || this.state.assetError ? amountError: null}
          </div>
          <div className="inputNoteDiv">
            Note <input onChange={this.update('note')} className="inputNote" placeholder={"Write a message"}></input>
          </div>
          <button style={buttonStyle} onClick={this.handleSubmit} className="buttonSendTransactionDiv">Send</button>
        </div>
      </div>
    );
  }
}

export default SendPopup;
