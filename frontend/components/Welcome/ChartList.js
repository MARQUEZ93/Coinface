import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';

class ChartList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => ((9/5)*(weather.main.temp - 273) + 32));
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;
    return (
    <tr key={name}>
      <td><GoogleMap lat={lat} lon={lon}/></td>
      <td><Chart data={temps} color="orange" units="F"/></td>
      <td><Chart data={pressures} color="green" units="hPa"/></td>
      <td><Chart data={humidities} color="black" units=""/></td>
    </tr>
  );

  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function msp({ data }) {
  return { data };// ES6 syntax
}
export default connect(msp)(ChartList);
