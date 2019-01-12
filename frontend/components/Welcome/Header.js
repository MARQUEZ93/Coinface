import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.historyPush = this.historyPush.bind(this);
    this.signUpPush = this.signUpPush.bind(this);
    this.loginPush = this.loginPush.bind(this);
  }

  historyPush(e) {
    e.preventDefault();
    if (this.props.location.pathname !== "/") {
      this.props.history.push("/");
    }
  }

  signUpPush(e) {
    e.preventDefault();
    if (this.props.location.pathname !== "/signup") {
      this.props.history.push("/signup");
    }
  }

  loginPush(e) {
    e.preventDefault();
    if (this.props.location.pathname !== "/login") {
      this.props.history.push("/login");
    }
  }
  render() {

  return (
      <div className="WelcomeHeader">
        <div className="WelcomeLogo">
          <p className="HeaderLink" onClick={this.historyPush}> coinface </p>
        </div>
        <div className="Welcome-Sessions">
          <p onClick={this.loginPush} className="WelcomeLogin"> Sign in </p>
          <p onClick={this.signUpPush} className="WelcomeSignup"> Get started </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
