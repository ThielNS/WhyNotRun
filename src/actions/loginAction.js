import { AUTH_LOGIN, VALID_LOGIN } from '../reducers/LoginReducer/constants';
import { urlLogin } from '../constants/routesApi';
import { post } from "../modules/request";
import { ERROR_PUBLICATION } from "../reducers/PublicationsReducer/constants";


export const loginAuthentication = (email, password) => dispatch => {

  const bodyParameters = {
    email: email,
    password: password
  };

  return post('login', bodyParameters)
    .then(token => {
      dispatch({
        type: AUTH_LOGIN,
        token: token
      })
    })
    .catch(error => {
      throw new Error('RequestError', { type: ERROR_PUBLICATION, message: error.message });
    })
};