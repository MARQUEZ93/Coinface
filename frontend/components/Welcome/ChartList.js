import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';
import { GridLoader } from 'halogenium';

class ChartList extends Component {

  renderCharts() {
    const data = this.props.chartData; //abbreviate 
    return (
    <tr>
      <td><Chart data={data.BTC} color="#FF9900" symbol="BTC"/></td>
      <td><Chart data={data.BCH} color="#4cca47" symbol="BCH"/></td>
      <td><Chart data={data.ETH} color="#4169E1" symbol="ETH"/></td>
      <td><Chart data={data.LTC} color="#b8b8b8" symbol="LTC"/></td>
      <td><Chart data={data.EJC} color="#669073" symbol="EJC"/></td>
    </tr>
  );

  }
  render() {
    if (!this.props.chartData || !this.props.assetData) {
      return (
        <div className='loadbar'>
          <GridLoader color="#6495ED" size="10px" margin="4px"/>
        </div>
    );
    }
    return (
      <table className="table table-hover">
        <tbody>
          {this.renderCharts()}
        </tbody>
      </table>
    );
  }
}
å
export default ChartList;
