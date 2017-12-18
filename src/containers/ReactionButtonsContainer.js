import { connect } from 'react-redux';
import ReactionButtons from "../components/CardPost/PostFooter/PostReact/ReactionButtons";
import { reactions } from "../actions/reactionsAction";

const mapStateToProps = state => {
  return {
    access: state.loginReducer
  }
};

const mapDispatchToProps = dispatch => (
  {
    reactions: (postId, postIndex, value) => {
      return dispatch(reactions(postId, postIndex, value));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ReactionButtons);