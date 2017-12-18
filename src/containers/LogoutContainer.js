import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from "../actions/loginAction";

class Logout extends Component {

  componentWillMount() {
    const { access, logoutFunc } = this.props;
    if(access.userToken) {
      logoutFunc ();
    }
  }

  render() {
    return(<Redirect to="/"/>);
  }
}

const mapStateToProps = state => {
  return {
    access: state.loginReducer
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logoutFunc: () => {
      return dispatch(logout());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);