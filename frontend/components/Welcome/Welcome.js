import React, { Component } from 'react';
//components
import Header from './Header';
import CenterMessage from './CenterMessage';
import FiveBoxes from './FiveBoxes';
import Footer from './Footer';

class Welcome extends Component {

  render() {
    const history = this.props.history;
    return (
      <div>
        <div className="Welcome">
          <Header />
          <CenterMessage history={history}/>
        </div>
        <FiveBoxes />
        <Footer />
    </div>
    );
  }
}

export default (Welcome);
