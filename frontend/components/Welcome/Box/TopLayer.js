import React, { Component } from 'react';

class TopLayer extends Component {

  render() {
    return (
      <div>
        <img src={ this.props.src } className="imageAsset" />
        <p> { this.props.name } </p>
        <div className="24">24h</div>
      </div>
    );
  }
}
export default TopLayer;
