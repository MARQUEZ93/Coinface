import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SignUpForm from './SignUpForm';

const mapStateToProps = ({ errors }) => {
  return {
    header: "Create your account",
    button: "CREATE ACCOUNT",
    errors: errors.session,
    navLink: <Link to="/login" className="SessionsNav">Already have an account?</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
