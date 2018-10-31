import React, { Component } from 'react';

const xSVG = <svg className="xSymbol" xmlns="http://www.w3.org/2000/svg"
  width="20" height="20" viewBox="0 0 20 20">
  <path d="M18.096 19.174l1.401-1.427L1.7.286.3 1.714z"></path>
  <path d="M19.497 1.714L18.096.286.3 17.747l1.4 1.427z">
  </path></svg>;

const equalsSVG = <svg className="equalsSVG"
  ui="[object Object]" xmlns="http://www.w3.org/2000/svg" width="21" height="22"
  viewBox="0 0 21 22">
  <path d="M20 14.8a.8.8 0 1 0 0-1.6H1a.8.8 0 0 0-.58 1.351l6.65 7a.8.8 0 0 0 1.16-1.102L2.863 14.8H20zM1 7.2a.8.8 0 1 0 0 1.6h19a.8.8 0 0 0 .58-1.351l-6.65-7a.8.8 0 1 0-1.16 1.102L18.137 7.2H1z">
</path></svg>;

class SendPopup extends Component {

  constructor(props){
    super(props);
  }

  render() {
    let symbol = this.props.symbol;
    let placeholder = "Enter a " + symbol + " address";
    let usdAmountPlaceholder = "0.00                   USD";
    let assetAmountPlaceholder = "0.00                   " + symbol;
    const pStyle = {
      color: this.props.color
    };
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
            Recipient <input className="inputReceipient" placeholder={placeholder}></input>
          </div>
          <div className="inputReceipientDiv">
            Available to send {availablePlaceholder}
          </div>
          <div className="inputsAmountsDiv">
            Amount
            <div className="usdAssetInputsDiv">
              <input className="inputUSDAmount" placeholder={usdAmountPlaceholder}></input>
              <div className="SymbolusdAssetInputsDiv">{equalsSVG}</div>
              <input className="inputAssetAmount" placeholder={assetAmountPlaceholder}></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SendPopup;
