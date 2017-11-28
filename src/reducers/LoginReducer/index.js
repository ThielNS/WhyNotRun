import { AUTH_LOGIN } from './constants';

const login = (state = [], action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      const local = localStorage;
      local.setItem('userToken',action.token);
      local.setItem('user', JSON.stringify(action.user));
      return state.concat({token: action.token, user: action.user});
    default :
      return state;
  }
};

export default login;