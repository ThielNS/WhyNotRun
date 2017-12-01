import React from 'react';
import { connect } from 'react-redux';
import FormRegister from '../components/FormRegister';
import { registerUser } from '../actions/registerAction';

const mapStateToProps = state => {
  return { user: state.registerReducer }

};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: (name, email, profession, password, confirmPassword) => {
      return dispatch(registerUser(name, email, profession, password, confirmPassword));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);
