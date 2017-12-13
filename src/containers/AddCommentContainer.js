import { connect } from 'react-redux';
import { addComment } from "../actions/commentsAction";
import AddComment from "../components/CardPost/PostFooter/AddComment";

const mapStateToProps = state => {
  return { access: state.loginReducer };
};

const mapDispatchToProps = dispatch => {
  return {
    addComment: (idPost, postIndex, text) => {
      return dispatch(addComment(idPost, postIndex, text));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);