import { connect } from 'react-redux';
import RegisterProfileImage from "../components/FormRegister/RegisterProfileImage";
import registerPicture from "../actions/registerPictureProfile";

const mapStateToProps = state => {
    return { access: state.loginReducer }
};

const mapDispatchToProps = dispatch => {
    return {
        registerPicture: (picture, userId) => {
            return dispatch(registerPicture(picture, userId));
        }
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(RegisterProfileImage);