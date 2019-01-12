import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class CenterMessage extends Component {

  constructor(props) {
    super(props);
    this.state = { email: "", invalidEmail: false};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  handleSubmit(e) {
    e.preventDefault();
    let validated = this.validateEmail(this.state.email);
    if ( validated) {
      this.props.history.push({
        pathname: '/signup',
        state: { email: this.state.email }
      });
    } else {
      this.setState({ invalidEmail: true });
    }
  }

  onInputChange(email) {
    this.setState({ email });
  }

  render () {

    let invalidEmail = <p className="invalidEmailWelcome">Invalid email</p>;

    return (
      <div className="Welcome-CenterMessage">
        <p className="Welcome-Center-Header"> Buy and sell virtual currency </p>
        <div className="Welcome-Center-pTag-Div">
          <p className="Welcome-Center-pTag"> Coinface is the easiest place to buy, sell, and manage  </p>
          <p className="Welcome-Center-pTag"> a virtual cryptocurrency portfolio. </p>
        </div>
        <div className="centerForm">
          <input onChange={event => this.onInputChange(event.target.value)} value={this.state.email} type="text" className="centerInput" placeholder="Email address" />
          <button onClick={event => this.handleSubmit(event)} className="centerButton" type="button"> Get Started </button>
        </div>
        {this.state.invalidEmail ? invalidEmail:null}
      </div>
    );
  }
}

export default withRouter(CenterMessage);
