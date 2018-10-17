import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

import Header from '../Welcome/Header';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
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
      <div className="SignUp">
        <Header />
        <h2 className="SignUpHeader1"> Create your account </h2>
        <form onSubmit={this.handleSubmit} className="SignUpForm">
          <br/>
          {this.renderErrors()}
          <div className="SignUpFormDiv">
            <label>First Name:
              <input type="text"
                value={this.state.email}
                onChange={this.update('firstName')}
                className="SignUpInput"
              />
            </label>
            <br/>
            <label>Last Name:
              <input type="text"
                value={this.state.email}
                onChange={this.update('lastName')}
                className="SignUpInput"
              />
            </label>
            <br/>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="SignUpInput"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="SignUpInput"
              />
            </label>
            <br/>
            <input className="SignUpSubmit" type="submit" value={"Sign Up"} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
