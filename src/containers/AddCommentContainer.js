import { connect } from 'react-redux';
import AddComment from "../components/CardPost/PostFooter/AddComment";

const mapStateToProps = state => {
  return { access: state.loginReducer };
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);