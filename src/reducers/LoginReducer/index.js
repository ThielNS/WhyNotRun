import { AUTH_LOGIN, LOGOUT } from './constants';
import { initialState } from "./initialState";
const login = (state = initialState, action) => {

  switch (action.type) {
    case AUTH_LOGIN:
      let local = localStorage;
      const { token, user } = action;

      local.setItem('userToken', token);
      local.setItem('user', JSON.stringify(user));

      state = initialState;
      return state;
    case LOGOUT:
      localStorage.clear();
      return state = {
        userToken: null,
        user: null
      };
    default :
      return state;
  }
};

export default login;