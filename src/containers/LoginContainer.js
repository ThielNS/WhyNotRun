import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Access';
import { validLogin } from "../actions/loginAction";

const mapStateToProps = state => {
  return { state };
}

const mapDispatchToProps = dispatch => {
  return {
    validLogin: (token) => {
      dispatch(validLogin());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
