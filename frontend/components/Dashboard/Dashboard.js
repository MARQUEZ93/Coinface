import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './Header';
import NavBar from './NavBar';

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Header email={this.props.email} action={this.props.action}/>
        <NavBar />
      </div>
    );
  }
}

const mdp = (dispatch) => (
  {
    action: () => dispatch(logout())
  }
);

const msp = ({ session }) => (
  {
    email: session.email
  }
);

export default connect(msp, mdp)(Dashboard);
