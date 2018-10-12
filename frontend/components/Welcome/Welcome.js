import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//components
import Header from './Header';
import Center from './Center';
import ChartList from './ChartList';
//action creators
import { fetchSparklines } from '../../actions/welcome_actions';
class Welcome extends Component {

  componentDidMount() {
    this.props.fetchSparklines("BTC");
    this.props.fetchSparklines("BCH");
    this.props.fetchSparklines("ETH");
    this.props.fetchSparklines("LTC");
    this.props.fetchSparklines("EJC");
  }

  render() {
    return (
      <div className="Welcome">
        <Header />
        <Center />
        <ChartList
          chartData={this.props.entities.chartData}
        />
      </div>
    );
  }
}

function msp({ entities }) { //es6 syntax - destructure entities
  return { entities };
}

function mdp(dispatch) {
  fetchSparklines: type => dispatch(fetchSparklines(type))
}

export default connect(msp, mdp)(Welcome);
