import React, { Component } from 'react';
import { GridLoader } from 'halogenium';
import _ from 'lodash';


class MiddleLayer extends Component {

  render() {
    if (this.props.price == null || this.props.change == null) {
      return (
        <div className='loadbar'>
          <GridLoader color="#6495ED" size="10px" margin="4px"/>
        </div>
      );
    }
    //negative comes w/ api data
    let changeDirection = this.props.change > 0 ? "+":"";
    let cssColor = "WelcomePriceChangeGreen";
    if (this.props.change == 0) {
      changeDirection = "+-";
      cssColor= "WelcomePriceChangeYellow";
    } else if (this.props.change < 0) {
      cssColor = "WelcomePriceChangeRed";
    }
    let renderChange = parseFloat(this.props.change).toFixed(2);
    return (
      <div className="MiddleLayer">
        <p className="WelcomePrice"> { "$" + this.props.price } </p>
        <p className={cssColor}> {changeDirection + renderChange + "%"} </p>
      </div>
    );
  }
}
export default MiddleLayer;
