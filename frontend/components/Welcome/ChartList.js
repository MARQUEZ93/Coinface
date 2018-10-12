import React, { Component } from 'react';
import Chart from './Chart';;

class ChartList extends Component {

  renderCharts() {
    const data = this.props.chartData; //abbreviate
    return (
    <tr>
      <td><Chart color="#FF9900" symbol="BTC"/></td>
    </tr>
  );

  }
  render() {
    return (
      <table className="table table-hover">
        <tbody>
          {this.renderCharts()}
        </tbody>
      </table>
    );
  }

}
export default ChartList;
