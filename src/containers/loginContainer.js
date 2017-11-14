import React from 'react';
import { connect } from 'react-redux';
import FormLogin from '../components/FormLogin';
import { validLogin } from "../actions/loginAction";

const mapDispatchToProps = dispatch => {
  return {
    validLogin: (token) => {
      dispatch(validLogin());
    }
  };
};

export default connect(mapDispatchToProps)(FormLogin);
