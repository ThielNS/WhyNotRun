import React from 'react';
import { connect } from 'react-redux';
import Feed from '../components/Feed';
import { listPosts } from "../actions/publicationsAction";

const mapStateToProps = state => {
  return { posts: state.publicationsReducer };
}

const mapDispatchToProps = dispatch => ({
  listPosts: () => {
    return dispatch(listPosts());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
