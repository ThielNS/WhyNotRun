import { connect } from 'react-redux';
import PostComments from "../components/CardPost/PostFooter/PostComments";
import { listComments } from "../actions/commentsAction";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => (
  {
    listComments: (postIndex, postId, commentId, limit) => {
      return dispatch(listComments(postIndex, postId, commentId, limit));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PostComments);