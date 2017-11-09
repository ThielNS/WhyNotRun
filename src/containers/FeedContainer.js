import React from 'react';
import { connect } from 'react-redux';
import Feed from '../components/Feed';
import { getAPI } from "../actions/postAction";

const mapStateToProps = state => {
  return { state: state.post };
}

const mapDispatchToProps = dispatch => ({
  getAPI: () => {
    dispatch(getAPI());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
