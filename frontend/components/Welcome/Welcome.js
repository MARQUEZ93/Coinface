import React, { Component } from 'react';
//components
import Header from './Header';
import Center from './Center';
import ChartList from './ChartList';

class Welcome extends Component {

  render() {
    return (
      <div className="Welcome">
        <Header />
        <Center />
        <ChartList />

      </div>
    );
  }
}

export default (Welcome);
