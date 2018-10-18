import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.historyPush = this.historyPush.bind(this);
  }

  historyPush(e) {
    e.preventDefault();
    if (this.props.location.pathname !== "/") {
      this.props.history.push("/");
    }
  }
  render() {

  return (
      <div className="WelcomeHeader">
        <div className="WelcomeLogo">
          <p className="HeaderLink" onClick={this.historyPush}> coinface </p>
        </div>
        <div className="Welcome-Sessions">
          <Link to="/login" style={{ textDecoration: 'none' }} className="WelcomeLogin"> Sign in </Link>
          <Link to="/signup" style={{ textDecoration: 'none' }} className="WelcomeSignup"> Get started </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
