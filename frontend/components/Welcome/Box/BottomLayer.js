import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import axios from 'axios';
import { GridLoader } from 'halogenium';

const URL = `https://min-api.cryptocompare.com/data/histoday?fsym=`;
const URL_END = `&tsym=USD&limit=60`;

class BottomLayer extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    const url = `${URL}`+`${this.props.symbol}`+`${URL_END}`;
    axios.get(url).then(res => {
      let prices = res.data.Data.map(el=>(el.open));
      this.setState( { data: prices });
    });
  }

  render() {
    if (!this.state.data) {
      return (
        <div className='loadbar'>
          <GridLoader color="#6495ED" size="10px" margin="4px"/>
        </div>
      );
    }
    const props = this.props;
    return (
      <div className="BottomLayer">
          <Sparklines height={126} data={this.state.data}>
            <SparklinesLine style={{ fill: "none", strokeWidth: 3 }} color={props.color} />
        </Sparklines>
      </div>
    );
  }
}

export default BottomLayer;
