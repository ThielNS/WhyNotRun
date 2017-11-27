import { combineReducers } from 'redux';
import publicationsReducer from './PublicationsReducer';
import loginReducer from "./LoginReducer";
import technologiesReducer from "./TechnologiesReducer";
import { bindActionCreators } from 'redux';

const reducerApp = combineReducers({ publicationsReducer, loginReducer, technologies: technologiesReducer });

export default reducerApp
