import { connect } from 'react-redux';
import InifiniteFeedScroller from '../components/InifiniteFeedScroller';
import { listPosts } from "../actions/publicationsAction";

const mapStateToProps = state => {
  return { posts: state.publicationsReducer };
};

const mapDispatchToProps  = {
  listPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(InifiniteFeedScroller);
