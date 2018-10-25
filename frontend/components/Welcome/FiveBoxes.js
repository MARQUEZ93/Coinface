import React, { Component } from 'react';
import Box from './Box/Box';

class FiveBoxes extends Component {

  render() {
    return (
      <div className="FiveBoxes">
        <Box color="#FF9900" src={window.btc} symbol="BTC" name="Bitcoin"/>
        <Box color="#4cca47" src={window.bch} symbol="BCH" name="Bitcoin Cash"/>
        <Box color="#4169E1" src={window.eth} symbol="ETH" name="Ethereum"/>
        <Box color="#b8b8b8" src={window.ltc} symbol="LTC" name="Litecoin"/>
        <Box color="#00cc99" src={window.etc} symbol="ETC" name="Ethereum Classic"/>
      </div>
    );
  }
}
export default FiveBoxes;
