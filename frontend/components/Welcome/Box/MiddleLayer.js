import React, { Component } from 'react';
import GridLoader from 'halogenium';

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
      let price = res.data.Raw.price;
      let change = res.data.Raw.CHANGEPCT24HOUR;
      this.setState( { price: price, change: change });
    });
  }

  render() {
    if (!this.state.price) {
      return (
        <div className='loadbar'>
          <GridLoader color="#6495ED" size="10px" margin="4px"/>
        </div>
      );
    }
    return (
      <div>
        <p className="WelcomePrice"> ${ this.state.price } </p>
        <p className="WelcomePriceChange"> +{ this.state.change }% </p>
      </div>
    );
  }
}
export default MiddleLayer;