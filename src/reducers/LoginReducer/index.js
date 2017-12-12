import { AUTH_LOGIN, LOGOUT } from './constants';
import { initialState } from "./initialState";

const login = (state = [initialState], action) => {

  switch (action.type) {
    case AUTH_LOGIN:
      return state;
    case LOGOUT:
      localStorage.clear();
      return state = [];
    default :
      return state;
  }
};

export default login;