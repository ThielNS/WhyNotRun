import { connect } from 'react-redux';
import InifiniteFeedScroller from '../components/InifiniteFeedScroller';
import { listPosts } from "../actions/publicationsAction";
import { listComments } from "../actions/commentsAction";

const mapStateToProps = state => {
  return { posts: state.publicationsReducer };
};

const mapDispatchToProps = {
  listPosts,
  listComments
};

export default connect(mapStateToProps, mapDispatchToProps)(InifiniteFeedScroller);
