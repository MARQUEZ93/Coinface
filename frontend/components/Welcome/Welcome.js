import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {

  render() {
    return (
      <div className="Welcome">
        <div className="Welcome-Header">
          <div className="Welcome-Logo">
            <p>coinface</p>
          </div>
          <div className="Welcome-Sessions">
            <Link to="/login" className="Welcome-Login"> Log in </Link>
            <Link to="/signup" className="Welcome-Signin"> Sign up </Link>
          </div>
        </div>
        <div className="Welcome-Buy">
          <p className="Welcome-Buy-pTag-Center"> Buy and sell digital currency </p>
          <p className="Welcome-pTag"> Coinface is the easiest and most trusted place to buy, </p>
          <p className="Welcome-pTag"> sell, and manage your digital currency. </p>
        </div>
        <div className="Welcome-EmailBox">
        </div>
      </div>
    );
  }
}

export default Welcome;
