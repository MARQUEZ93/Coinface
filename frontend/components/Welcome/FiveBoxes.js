import React, { Component } from 'react';
import Box from './Box/Box';
import { connect } from 'react-redux';
import { getPrice, getSparklines } from '../../actions/prices_actions';


class FiveBoxes extends Component {

  componentDidMount(){
    this.props.getPrice("BTC");
    this.props.getPrice("BCH");
    this.props.getPrice("ETH");
    this.props.getPrice("ETC");
    this.props.getPrice("LTC");

    this.props.getSparklines("BTC");
    this.props.getSparklines("BCH");
    this.props.getSparklines("ETH");
    this.props.getSparklines("ETC");
    this.props.getSparklines("LTC");
  }

  render() {
    return (
      <div className="FiveBoxes">
        <Box color="#FF9900" src={window.btc} symbol="BTC" name="Bitcoin"
          price={this.props.priceBTC} change={this.props.changeBTC} sparklines={this.props.sparklinesBTC}/>
        <Box color="#4cca47" src={window.bch} symbol="BCH" name="Bitcoin Cash"
          price={this.props.priceBCH} change={this.props.changeBCH} sparklines={this.props.sparklinesBCH}/>
        <Box color="#4169E1" src={window.eth} symbol="ETH" name="Ethereum"
          price={this.props.priceETH} change={this.props.changeETH} sparklines={this.props.sparklinesETH}/>
        <Box color="#b8b8b8" src={window.ltc} symbol="LTC" name="Litecoin"
          price={this.props.priceLTC} change={this.props.changeLTC} sparklines={this.props.sparklinesLTC}/>
        <Box color="#00cc99" src={window.etc} symbol="ETC" name="Ethereum Classic"
          price={this.props.priceETC} change={this.props.changeETC} sparklines={this.props.sparklinesETC}/>
      </div>
    );
  }
}

const mdp = (dispatch) => (
  {
    getPrice: (symbol) => dispatch(getPrice(symbol)),
    getSparklines: (symbol) => dispatch(getSparklines(symbol)),
  }
);

const msp = ({ entities }) => (
  {
    priceBTC: entities.currentPrices.BTC, priceETH: entities.currentPrices.ETH,
    priceETC: entities.currentPrices.ETC, priceLTC: entities.currentPrices.LTC,
    priceBCH: entities.currentPrices.BCH, changeBTC: entities.currentChanges.BTC,
    changeETH: entities.currentChanges.ETH, changeETC: entities.currentChanges.ETC,
    changeLTC: entities.currentChanges.LTC, changeBCH: entities.currentChanges.BCH,
    sparklinesBCH: entities.currentSparklines.BCH, sparklinesBTC: entities.currentSparklines.BTC,
    sparklinesETH: entities.currentSparklines.ETH, sparklinesETC: entities.currentSparklines.ETC,
    sparklinesLTC: entities.currentSparklines.LTC
  }
);
export default connect(msp, mdp)(FiveBoxes);
