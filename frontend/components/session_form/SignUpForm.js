import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Welcome/Header';

class SignUpForm extends React.Component {
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
      firstName: "",
      middleName: "",
      lastName: "",
      submit: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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

    return (
      <div className="Sessions">
        <Header />
        <h2 className="SessionsHeader"> {this.props.header} </h2>
        <form onSubmit={this.handleSubmit} className="SignUpForm">
            {this.renderErrors()}
            <div className="SessionsInputsDiv">
                <input type="text"
                  value={this.state.firstName}
                  onChange={this.update('firstName')}
                  className="SessionsInput"
                  placeholder="First name"
                />
                <input type="text"
                  value={this.state.firstName}
                  onChange={this.update('middleName')}
                  className="SessionsInput"
                  placeholder="Middle name"
                />
                <input type="text"
                  value={this.state.lastName}
                  onChange={this.update('lastName')}
                  className="SessionsInput"
                  placeholder="Last name"
                />
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
              <input className="SessionsSubmit" type="submit" value={this.props.button} />
            </div>
        </form>
        <div className="SessionsNavDiv">{this.props.navLink}</div>
      </div>
    );
  }
}

export default withRouter(SignUpForm);
