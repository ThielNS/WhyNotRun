import { post } from "../modules/request";
import { ERROR_PUBLICATION } from "../reducers/PublicationsReducer/constants";


export const registerUser = (name, email, password, confirmPassword, profession) => dispatch => {

    const bodyParams = {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        profession: profession
    };

    return post('users', bodyParams)
        .then(data => data)
        .catch(error => {
            throw new Error('RequestError', { type: ERROR_PUBLICATION, message: error.message });
        })
};

