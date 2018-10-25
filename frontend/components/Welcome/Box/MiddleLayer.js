import React, { Component } from 'react';
import { GridLoader } from 'halogenium';
import _ from 'lodash';

import axios from 'axios';

const URL = `https://min-api.cryptocompare.com/data/generateAvg?fsym=`;
const URL_END = `&tsym=USD&e=Kraken`;

class MiddleLayer extends Component {

  constructor(props) {
    super(props);
    this.state = { price: null, change: null };
  }

  componentDidMount() {
    const url = `${URL}`+`${this.props.symbol}`+`${URL_END}`;
    axios.get(url).then(res => {
      const price = res.data.RAW.PRICE.toFixed(2);
      const change = _.round(res.data.RAW.CHANGEPCT24HOUR, 2);
      this.setState( { price: price, change: change } );
    });
  }

  render() {
    if (this.state.price == null || this.state.change == null) {
      return (
        <div className='loadbar'>
          <GridLoader color="#6495ED" size="10px" margin="4px"/>
        </div>
      );
    }
    let changeDirection = this.state.change > 0 ? "+":"";
    if (this.state.change == 0) {
      changeDirection = "+-";
    }
    let renderChange = parseFloat(this.state.change).toFixed(2);
    return (
      <div className="MiddleLayer">
        <p className="WelcomePrice"> { "$" + this.state.price } </p>
        <p className="WelcomePriceChange"> {changeDirection + renderChange + "%"} </p>
      </div>
    );
  }
}
export default MiddleLayer;
