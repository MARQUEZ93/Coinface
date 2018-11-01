import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Welcome/Header';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    //grab email from welcome page
    let email = "";
    if (typeof this.props.history.location.state != 'undefined') {
      email = this.props.history.location.state.email;
    }
    this.state = {
      email: email,
      password: '',
      submit: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginAsGuest = this.loginAsGuest.bind(this);
    this.loginAsGuestHelper = this.loginAsGuestHelper.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  //full transparency: I took this setTimeout code from Oliver Ball
  //https://github.com/OhBall/Taut
  // of my app academy cohort. I loved it, and wanted it in my app!

  loginAsGuest() {
    const emailArray = 'Alejandro@coinface.com'.split('');
    const passwordArray = 'password'.split('');
    const button = document.getElementById('login');
    this.setState({ email: '', password: '', submit: false }, () =>
      this.loginAsGuestHelper(emailArray, passwordArray, button)
    );
  }

  loginAsGuestHelper(emailArray, passwordArray, button){
    if (emailArray.length > 0) {
      this.setState(
        { email: this.state.email + emailArray.shift() }, () => {
          window.setTimeout( () =>
            this.loginAsGuestHelper(emailArray, passwordArray, button), 75);
        }
      );
    } else if (passwordArray.length > 0) {
      this.setState(
        { password: this.state.password + passwordArray.shift() }, () => {
          window.setTimeout( () =>
            this.loginAsGuestHelper(emailArray, passwordArray, button), 100);
        }
      );
    } else {
      this.setState( { submit: true });
      button.click();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let userObject = {
      password: this.state.password,
      email: this.state.email,
    };
    const user = Object.assign({}, userObject);
    if (this.state.submit || this.props.button === "CREATE ACCOUNT" ) {
      this.props.processForm(user);
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    let SignIn = <input className="SessionsSubmit" type="submit" value={this.props.button} />;
    if (this.props.button == "SIGN IN") {
      SignIn = (
        <div className="SessionsSubmitDemo">
          <input id="login" className="SessionsSubmit" type="submit" value={this.props.button} />
          <input className="SessionsSubmit" onClick={this.loginAsGuest} type="submit" value="GUEST" />
      </div>
      );
    }

    return (
      <div className="Sessions">
        <Header />
        <h2 className="SessionsHeader"> {this.props.header} </h2>
        <form onSubmit={this.handleSubmit} className="SessionsForm">
            {this.renderErrors()}
            <div className="SessionsInputsDiv">
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="SessionsInput"
                  placeholder="Email"
                />
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="SessionsInput"
                  placeholder="Password"
                />
            </div>
            <div className="SessionsSubmitDivs">
              {SignIn}
            </div>
        </form>
        <div className="SessionsNavDiv">{this.props.navLink}</div>
      </div>
    );
  }
}

export default withRouter(SignInForm);
