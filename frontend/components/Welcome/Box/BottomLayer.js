import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import axios from 'axios';
import { GridLoader } from 'halogenium';

class BottomLayer extends Component {


  render() {
    if (!this.props.sparklines) {
      return (
        <div className='loadbar'>
          <GridLoader color="#6495ED" size="10px" margin="4px"/>
        </div>
      );
    }
    const props = this.props;
    return (
      <div className="BottomLayer">
          <Sparklines height={126} data={props.sparklines}>
            <SparklinesLine style={{ fill: "none", strokeWidth: 3 }} color={props.color} />
        </Sparklines>
      </div>
    );
  }
}

export default BottomLayer;
