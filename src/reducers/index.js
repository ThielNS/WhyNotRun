import { combineReducers } from 'redux';
import publicationsReducer from './PublicationsReducer';
import loginReducer from "./LoginReducer";
import technologiesReducer from "./TechnologiesReducer";

const reducerApp = combineReducers({ publicationsReducer, loginReducer, technologiesReducer });

export default reducerApp
