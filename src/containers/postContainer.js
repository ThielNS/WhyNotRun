import React from 'react';
import { connect } from 'react-redux';
import Post from '../components/publication';
import { addPost } from "../actions/postAction";

const mapStateToProps = state => {
  return { state };
}

const mapDispatchToProps = dispatch => ({
  addPost: (title, text, idTech, idUser) => {
    dispatch(addPost(title, text, idTech, idUser));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
