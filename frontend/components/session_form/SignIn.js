import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

import Header from '../Welcome/Header';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <div className="SignIn">
        <Header />
        <form onSubmit={this.handleSubmit} className="SignIn-form-box">
          Welcome to Coinface!
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="SignIn-form">
            <br/>
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="SignIn-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="SignIn-input"
              />
            </label>
            <br/>
            <input className="SignInSubmit" type="submit" value={"Sign In"} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
