import { connect } from 'react-redux';
import FormRegister from '../components/FormRegister';
import { registerUser } from '../actions/registerAction';
import { loginAuthentication } from "../actions/loginAction";

const mapStateToProps = state => {
  return { user: state.registerReducer }

};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: (name, email, password, confirmPassword, profession ) => {
      return dispatch(registerUser(name, email, password, confirmPassword, profession));
    },
    loginAuthentication: (email, password) => {
      return dispatch(loginAuthentication(email, password));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);
