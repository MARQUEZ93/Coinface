import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <div className="WelcomeHeader">
        <div className="Welcome-Logo">
          <p> coinface </p>
        </div>
        <div className="Welcome-Sessions">
          <Link to="/login" className="Welcome-Login"> Sign in </Link>
          <Link to="/signup" className="Welcome-Signin"> Get started </Link>
        </div>
      </div>
  );
}

export default Header;
