import React, { Component } from 'react';

import SignOut from '../session_form/SignOutContainer';
import Header from './Header';

class Feature extends Component {
  render() {
    return (
      <div>
        <Header />
        <SignOut />
      </div>
    );
  }
}

export default Feature;
