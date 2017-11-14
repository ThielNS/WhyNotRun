import { VALID_LOGIN } from '../constants/actionTypes';
import { urlLogin } from '../constants/routesApi';


export const loginAuthentication = (email, password) => dispatch => {

  const bodyParameters = {
    email: email,
    password: password
  };

  return fetch(urlLogin,{
    method: 'POST',
    body: JSON.stringify(bodyParameters),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(({ token }) => {
    dispatch({
      type: VALID_LOGIN,
      token
    });
  })
  .catch( error => {
    console.log(error);
  });
};