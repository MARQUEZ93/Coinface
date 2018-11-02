import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { GridLoader } from 'halogenium';

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
      loading: false,
      invalidEmail: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderLoader = this.renderLoader.bind(this);
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  handleSubmit(e) {
    e.preventDefault();
    let validatedEmail = this.validateEmail(this.state.email);
    this.setState( { loading: true });
    let userObject = {
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.lastName,
      password: this.state.password,
      email: this.state.email,
    };
    const user = Object.assign({}, userObject);
    if (validatedEmail) {
      this.props.processForm(user);
    } else if (!validatedEmail) {
      this.setState({invalidEmail: true, loading: false });
    }
  }

  renderLoader() {
    if (!this.state.loading || this.props.errors.length > 0) {
      return (
        <div className="SessionsNavDiv">{this.props.navLink}</div>
      );
    }
    return (
      <div className='loadbar'>
        <GridLoader/>
      </div>
    )
  }

  render() {

    let invalidEmail = <p className="noAtSymbol">Invalid email</p>;

    let errors = this.props.errors;
    let x = 0;
    if (errors.length > 1) {
      x = errors.length -1;
    }
    let invalidSession= <p className="invalidSession">Invalid Sign Up</p>;

    return (
      <div className="Sessions">
        <Header />
        <h2 className="SessionsHeader"> {this.props.header} </h2>
        <form onSubmit={this.handleSubmit} className="SignUpForm">
          {this.props.errors.length > 0 ? invalidSession: null}
            <div className="SessionsInputsDiv">
                <input type="text"
                  value={this.state.firstName}
                  onChange={this.update('firstName')}
                  className="SessionsInput"
                  placeholder="First name"
                />
                <input type="text"
                  value={this.state.middleName}
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
            {this.state.invalidEmail ? invalidEmail:null}
            <div className="SessionsSubmitDivs">
              <input className="SessionsSubmit" type="submit" value={this.props.button} />
            </div>

        </form>
        {this.renderLoader()}
      </div>
    );
  }
}

export default withRouter(SignUpForm);
