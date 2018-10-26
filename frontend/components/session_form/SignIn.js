import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SignInForm from './SignInForm';

const mapStateToProps = ({ errors }) => {
  return {
    header: "Sign in to Coinface",
    button: "SIGN IN",
    errors: errors.session,
    navLink: <Link to="/signup" className="SessionsNav">Don't have an account?</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
