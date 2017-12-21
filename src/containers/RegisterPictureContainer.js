import { connect } from 'react-redux';
import RegisterProfileImage from "../components/FormRegister/RegisterProfileImage";
import registerPicture from "../actions/registerPictureProfile";

const mapStateToProps = state => {
    return { picture: state.registerPicture }
};

const mapDispatchToProps = dispatch => {
    return {
        registerPicture: (picture) => {
            return dispatch(registerPicture());
        }
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(RegisterProfileImage);