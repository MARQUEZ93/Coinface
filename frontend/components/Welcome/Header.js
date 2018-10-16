import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
      <div className="WelcomeHeader">
        <div className="Welcome-Logo">
          <Link className="HeaderLink" to="/"> <p> coinface </p> </Link>
        </div>
        <div className="Welcome-Sessions">
          <Link to="/login" style={{ textDecoration: 'none' }} className="Welcome-Login"> Sign in </Link>
          <Link to="/signup" style={{ textDecoration: 'none' }} className="Welcome-Signin"> Get started </Link>
        </div>
      </div>
  );
}

export default Header;
