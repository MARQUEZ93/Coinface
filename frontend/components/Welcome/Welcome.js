import React from 'react';

class Welcome extends React.Component {

  signUpLink() {
    this.props.history.push('/signup');
  }

  loginLink() {
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="Welcome">
        <div className="Welcome-Header">
          <div className="Welcome-Logo">
            <h3>coinface</h3>
          </div>
          <div className="Welcome-Sessions">
            <h3 className="Welcome-Log"> Log in </h3>
            <h3 className="Welcome-Sign"> Sign up </h3>
          </div>
        </div>
        <div className="Welcome-Buy">
          <p> Buy and sell digital currency </p>
          <p> Coinface is the easiest and most trusted place to buy, </p>
          <p> sell, and manage your digital currency. </p>
        </div>
        <div className="Welcome-EmailBox">
        </div>
      </div>
    );
  }
}

export default Welcome;
