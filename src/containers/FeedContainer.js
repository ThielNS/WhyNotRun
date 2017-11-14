import React from 'react';
import { connect } from 'react-redux';
import Feed from '../components/Feed';
import { listPosts } from "../actions/postAction";

const mapStateToProps = state => {
  return { posts: state.post };
}

const mapDispatchToProps = dispatch => ({
  getAPI: () => {
    return dispatch(listPosts());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
