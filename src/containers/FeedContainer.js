import React from 'react';
import { connect } from 'react-redux';
import Feed from '../components/Feed';
import { getAPI } from "../actions/postAction";
import { validLogin } from "../actions/loginAction";

const mapStateToProps = state => {
  return { posts: state.post };
}

const mapDispatchToProps = dispatch => ({
  getAPI: () => {
    return dispatch(getAPI());
  },
  validLogin: () => {
    dispatch(validLogin());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
