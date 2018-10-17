import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SignUp from './SignUp';

const mapStateToProps = ({ errors }) => {
  return {
    header: "Create your account",
    errors: errors.session,
    navLink: <Link to="/signup">Already have an account?</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
