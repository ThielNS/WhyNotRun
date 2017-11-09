import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Access';

const mapStateToProps = state => {
  return { state };
}

const mapDispatchToProps = dispatch => {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
