import React, { Component } from 'react';

import SignOut from './session_form/SignOutContainer';

class Feature extends Component {
  render() {
    return (
      <div>
        <h1> This is the feature </h1>
        <SignOut />
      </div>
    );
  }
}

export default Feature;
