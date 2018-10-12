import React, { Component } from 'react';
import Chart from './Chart';;

class ChartList extends Component {

  renderCharts() {
    const data = this.props.chartData; //abbreviate
    return (
      <div className="welcomeCharts">
        <Chart color="#FF9900" symbol="BTC"/>
        <Chart color="#4cca47" symbol="BCH"/>
        <Chart color="#4169E1" symbol="ETH"/>
        <Chart color="#b8b8b8" symbol="LTC"/>
        <Chart color="#669073" symbol="ETC"/>
      </div>
  );

  }
  render() {
    return (
      <div>
        {this.renderCharts()}
      </div>
    );
  }

}
export default ChartList;
