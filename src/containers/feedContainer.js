import { connect } from 'react-redux';
import Feed from '../components/Feed';
import { listPosts } from "../actions/publicationsAction";

const mapStateToProps = state => {
  return { posts: state.publicationsReducer };
};

const mapDispatchToProps  = {
  listPosts
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
