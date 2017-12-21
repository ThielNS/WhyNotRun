import { connect } from 'react-redux';
import PublicationForm from '../components/PublicationForm';
import { addPost, listPosts } from "../actions/publicationsAction";

const mapStateToProps = state => {
  return { access: state.loginReducer };
};

const mapDispatchToProps = dispatch => ({
  addPost: data => {
    return dispatch(addPost(data));
  },
  listPosts: page => {
    return dispatch(listPosts(page));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicationForm);
