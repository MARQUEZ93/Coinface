import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';

class ChartList extends Component {

  renderCharts(sparklinesData) {
    const temps = sparklinesData.list.map(weather => ((9/5)*(weather.main.temp - 273) + 32));
    const pressures = sparklinesData.list.map(weather => weather.main.pressure);
    const humidities = sparklinesData.list.map(weather => weather.main.humidity);
    return (
    <tr>
      <td><Chart data={temps} color="#FF9900" symbol="BTC"/></td>
      <td><Chart data={pressures} color="#4cca47" symbol="BCH"/></td>
      <td><Chart data={humidities} color="#4169E1" symbol="ETH"/></td>
      <td><Chart data={humidities} color="#b8b8b8" symbol="LTC"/></td>
      <td><Chart data={pressures} color="#669073" symbol="EJC"/></td>
    </tr>
  );

  }
  render() {
    return (
      <table className="table table-hover">
        <tbody>
          {this.props.sparkLinesData.map(this.renderCharts)}
        </tbody>
      </table>
    );
  }
}
å
export default ChartList;
