import { combineReducers } from 'redux';
import publicationsReducer from './PublicationsReducer';
import loginReducer from "./LoginReducer";
import technologiesReducer from "./TechnologiesReducer";
import registerReducer from "./RegisterReducer"

const reducerApp = combineReducers({ publicationsReducer, loginReducer, technologiesReducer, registerReducer  });

export default reducerApp
