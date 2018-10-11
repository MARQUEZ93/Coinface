import React from 'react';

const Header = () => {
  return (
    <div className="Welcome">
    <div className="Welcome-Header">
    <div className="Welcome-Logo">
    <p> coinface </p>
    </div>
    <div className="Welcome-Sessions">
    <Link to="/login" className="Welcome-Login"> Log in </Link>
    <Link to="/signup" className="Welcome-Signin"> Sign up </Link>
    </div>
    </div>
  );
}

export default Header;
