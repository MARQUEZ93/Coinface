import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Welcome/Header';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    //grab email from welcome page
    let email = "";
    if (typeof this.props.history.location.state != 'undefined') {
      email = this.props.history.location.state.email;
    }
    this.state = {
      email: email,
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
            <div className="SessionsSubmitDiv">
              <input className="SessionsSubmit" type="submit" value={this.props.button} />
            </div>
        </form>
        <div className="SessionsNavDiv">{this.props.navLink}</div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
