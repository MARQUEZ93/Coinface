import React, { Component } from 'react';

const clipboard = <svg className="clipboard"
  xmlns="http://www.w3.org/2000/svg" width="22" height="22"
  viewBox="0 0 22 22">
  <path d="M16 8v8H8v4h12V8h-4zm0-2h6v16H6v-6H0V0h16v6zM2 2v12h12V2H2z">
  </path></svg>;

class WalletAddress extends Component {

  constructor(props) {
    super(props);
    this.copyText = this.copyText.bind(this);
  }
  componentDidMount() {
    document.getElementById("walletAddressInput").disabled = true;
  }
  //do I need to unsubscribe w/ componentWillUnmount?

  copyText() {
    document.getElementById("walletAddressInput").disabled = false;
    var copyText = document.getElementById("walletAddressInput");
    copyText.select();
    document.execCommand("copy");
    document.getElementById("walletAddressInput").disabled = true;
  }

  render() {
    const symbol = this.props.symbol;
    const pStyle = {
      color: this.props.color
    };

    return (
      <div className='WalletAddress'>
        <div className='innerWalletAddress'>
          <div className="headerWalletAddress">
            <div className="symbolPopUp">
              <p>My</p><p className="pstyle" style={pStyle}>{symbol}</p><p> Address</p>
            </div>
            <svg onClick={() => this.props.closePopup(false)} className="xSymbolBarcode" xmlns="http://www.w3.org/2000/svg"
              width="20" height="20" viewBox="0 0 20 20">
              <path d="M18.096 19.174l1.401-1.427L1.7.286.3 1.714z"></path>
              <path d="M19.497 1.714L18.096.286.3 17.747l1.4 1.427z">
              </path></svg>
          </div>
          <div className="mainWalletAddress">
            <div className="centerDivWalletAddress">
              <div className="walletAddressBarcode">
                <img className="imgWalletAddress" src={window.address} />
              </div>
              <div className="addressClipboard">
                <input type="text" className="walletAddressInput" defaultValue={this.props.address} id="walletAddressInput" />
                <div className="clipboardDiv" id="copyWalletAddress" onClick={this.copyText}>{clipboard}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default (WalletAddress);
