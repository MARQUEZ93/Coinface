import React, { Component } from 'react';

class ImageAsset extends Component {

  render() {
    return (
      <img src={ this.props.src } height="42" width="42" className="imageAsset" />
    );
  }
}
export default ImageAsset;
