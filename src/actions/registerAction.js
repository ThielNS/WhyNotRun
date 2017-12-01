import { VALID_REGISTER, REGISTER_USER } from '../reducers/RegisterReducer/constants';
import { post } from "../modules/request";
import { ERROR_PUBLICATION } from "../reducers/PublicationsReducer/constants";


export const registerUser = (name, email, profession, password, confirmPassword) => (dispatch) => {
    const bodyParams = {
        name: name,
        email: email,
        profession: profession,
        password: password,
        confirmPassword: confirmPassword
    };

    return post('register', bodyParams)
        .then(data => {            
            dispatch({
                type: REGISTER_USER,             
                name: data.name,
                email: data.email,
                profession: data.profession,
                password: data.password,
                confirmPassword: data.confirmPassword
            })
            //return Promise.resolve();
        })
        .catch(error => {
            //return Promise.reject(error)
            throw new Error('RequestError', { type: ERROR_PUBLICATION, message: error.message });
        })
};

