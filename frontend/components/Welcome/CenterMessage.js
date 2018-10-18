import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class CenterMessage extends Component {

  constructor(props) {
    super(props);
    this.state = { email: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: '/signup',
      state: { email: this.state.email }
    });
  }

  onInputChange(email) {
    this.setState({ email });
  }

  render () {

    return (
      <div className="Welcome-CenterMessage">
        <p className="Welcome-Center-Header"> Buy and sell digital currency </p>
        <div className="Welcome-Center-pTag-Div">
          <p className="Welcome-Center-pTag"> Coinface is the easiest and most trusted place to buy, </p>
          <p className="Welcome-Center-pTag"> sell, and manage your digital currency. </p>
        </div>
        <div className="centerForm">
          <input onChange={event => this.onInputChange(event.target.value)} value={this.state.email} type="text" className="centerInput" placeholder="Email address" />
          <button onClick={event => this.handleSubmit(event)} className="centerButton" type="button"> Get Started </button>
        </div>
      </div>
    );
  }
}

export default withRouter(CenterMessage);
