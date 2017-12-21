import { connect } from 'react-redux';
import ReactionButtons from "../components/CardPost/PostFooter/PostReact/ReactionButtons";
import { reactions } from "../actions/reactionsAction";
import { listComments } from "../actions/commentsAction";

const mapStateToProps = state => {
  return {
    access: state.loginReducer
  }
};

const mapDispatchToProps = dispatch => (
  {
    reactions: (postId, postIndex, value) => {
      return dispatch(reactions(postId, postIndex, value));
    },
    listComments: (postIndex, postId, commentId, limit) => {
      return dispatch(listComments(postIndex, postId, commentId, limit));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ReactionButtons);