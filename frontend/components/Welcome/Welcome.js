import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//components
import Header from './Header';
import Center from './Center';
import ChartList from 'ChartList';
//action creators 
import { fetchSparklines, fetchAssets } from '../actions/welcome_actions';

class Welcome extends Component {

  render() {
    return (
        <Header />
        <Center />
        <ChartList
          chartData={this.props.entities.chartData}
          assetData={this.props.entities.assetData}
          fetchSparklines={this.props.fetchSparklines}
          fetchAsset={this.props.fetchAssets}
        />
      </div>
    );
  }
}

function msp({ entities }) { //es6 syntax - destructure entities
  return { entities };
}

function mdp(dispatch) {
  fetchSparklines: type => dispatch(fetchSparklines(type)),
  fetchAssets: type => dispatch(fetchAssets(type))
}

export default connect(msp, mdp)(Welcome);
