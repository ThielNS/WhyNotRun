import { AUTH_LOGIN } from './constants';

const login = (state = [], action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      localStorage.setItem('userToken',action.token);
      return state.concat({token: action.token});
    default :
      return state;
  }
};

export default login;