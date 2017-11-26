import React from 'react';
import { connect } from 'react-redux';
import FormLogin from '../components/FormLogin';
import { loginAuthentication } from "../actions/loginAction";

const mapStateToProps = state => {
};

const mapDispatchToProps = dispatch => {
  return {
    loginAuthentication: (email, password) => {
      return dispatch(loginAuthentication(email, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
