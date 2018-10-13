import React, { Component } from 'react';

class TopLayer extends Component {

  render() {
    return (
      <div className="TopLayer">
        <div className="TopLayer2">
          <img src={ this.props.src } className="imageAsset" />
          <p className="TopLayerName"> { this.props.name } </p>
        </div>
        <div className="TwentyFour">24h</div>
      </div>
    );
  }
}
export default TopLayer;
