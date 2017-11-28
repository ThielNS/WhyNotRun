import { connect } from 'react-redux';
import NavBar from "../components/Navbar";

const mapStateToProps = state => {
  return { access: state.loginReducer };
};

export default connect(mapStateToProps)(NavBar);