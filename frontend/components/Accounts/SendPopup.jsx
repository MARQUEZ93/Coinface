import React, { Component } from 'react';

const xSVG = <svg className="xSymbol" xmlns="http://www.w3.org/2000/svg"
  width="20" height="20" viewBox="0 0 20 20">
  <path d="M18.096 19.174l1.401-1.427L1.7.286.3 1.714z"></path>
  <path d="M19.497 1.714L18.096.286.3 17.747l1.4 1.427z">
  </path></svg>;

class SendPopup extends Component {

  constructor(props){
    super(props);
  }

  render() {
    let symbol = this.props.symbol;
    let placeholder = "Enter a " + symbol + " address"
    return (
      <div className='SendPopup'>
        <div className='popup_inner'>
          <div className="firstLinePopup">
            <p className="symbolPopUp">Send {symbol}</p>
            <button className="closePopupButton" onClick={this.props.closePopup}>{xSVG}</button>
          </div>
          <div className="inputReceipientDiv">
            Recipient <input className="inputReceipient" placeholder={placeholder}></input>
          </div>
          <div className="inputReceipientDiv">
            Available to send <input className="inputReceipient" placeholder={placeholder}></input>
          </div>
        </div>
      </div>
    );
  }
}

export default SendPopup;
