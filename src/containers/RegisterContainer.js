import { connect } from 'react-redux';
import FormRegister from '../components/FormRegister';
import { registerUser } from '../actions/registerAction';

const mapStateToProps = state => {
  return { user: state.registerReducer }

};

const mapDispatchToProps = dispatch => {
  return {
    registerUser: (name, email, password, confirmPassword, profession ) => {
      return dispatch(registerUser(name, email, password, confirmPassword, profession));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);
