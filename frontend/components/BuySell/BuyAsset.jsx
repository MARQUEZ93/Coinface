import React, { Component } from 'react';

const scrollSVG = <svg
  className="scrollSVG" xmlns="http://www.w3.org/2000/svg"
  width="9" height="14" viewBox="0 0 9 14">
  <path d="M4.5 14a.47.47 0 0 1-.325-.134l-3.88-3.694.651-.844L4.5 12.713l3.554-3.385.651.844-3.88 3.694A.47.47 0 0 1 4.5 14zm3.554-9.295L4.5 1.659.946 4.704l-.651-.76L4.175.62a.5.5 0 0 1 .65 0l3.88 3.326-.651.759z">
  </path></svg>;

class BuyAsset extends Component {
  constructor(props) {
    super(props);
    this.renderBuyAsset = this.renderBuyAsset.bind(this);
  }
  renderBuyAsset() {
    return (
      <div className="BuyAsset">
        <div className="BuyAssetNavBar">
          <div className="BuyNav"><p>Buy</p></div>
          <div className="SellNav"><p>Sell</p></div>
        </div>
      </div>
    );

  }
  render() {
    return (
      <div className="BuyAssetYouAreBuying">
        {this.renderBuyAsset()}
      </div>
    );
  }
}

export default BuyAsset;
