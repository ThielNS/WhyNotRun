import { connect } from 'react-redux';
import RegisterProfileImage from "../components/FormRegister/RegisterProfileImage";
import registerPicture from "../actions/registerPictureProfile";
import { loginAuthentication } from "../actions/loginAction";

const mapStateToProps = state => {
    return { access: state.loginReducer }
};

const mapDispatchToProps = dispatch => {
    return {
        registerPicture: (picture, userId) => {
            return dispatch(registerPicture(picture, userId));
        },
      loginAuthentication: (email, password) => {
        return dispatch(loginAuthentication(email, password));
      }
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(RegisterProfileImage);