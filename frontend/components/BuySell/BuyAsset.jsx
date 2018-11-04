import React, { Component } from 'react';
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
