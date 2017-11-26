import { combineReducers } from 'redux';
import publicationsReducer from './PublicationsReducer';
import loginReducer from "./LoginReducer";

const reducerApp = combineReducers({publicationsReducer, loginReducer});

export default reducerApp
