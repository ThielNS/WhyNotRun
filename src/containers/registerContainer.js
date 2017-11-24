import React from 'react';
import { connect } from 'react-redux';
import FormRegister from '../components/FormRegister';
import { validLogin } from "../actions/loginAction";

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapDispatchToProps)(FormRegister);
