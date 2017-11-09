import React from 'react';
import { connect } from 'react-redux';
import Feed from '../components/Feed';
import { getAPI } from "../actions/postAction";
import { validLogin } from "../actions/loginAction";

const mapStateToProps = state => {
  return { state: state.post };
}

const mapDispatchToProps = dispatch => ({
  getAPI: () => {
    dispatch(getAPI());
  },
  validLogin: () => {
    dispatch(validLogin());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
