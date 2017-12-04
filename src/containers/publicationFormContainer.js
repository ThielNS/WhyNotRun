import React from 'react';
import { connect } from 'react-redux';
import PublicationForm from '../components/PublicationForm';
import { addPost } from "../actions/publicationsAction";

const mapStateToProps = state => {
  return { access: state.loginReducer };
};

const mapDispatchToProps = dispatch => ({
  addPost: posting => {
    dispatch(addPost(posting));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicationForm);
