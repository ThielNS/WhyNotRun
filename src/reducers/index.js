import { combineReducers } from 'redux';
import publicationsReducer from './PublicationsReducer';
import loginReducer from "./LoginReducer";
import technologiesReducer from "./TechnologiesReducer";
import registerReducer from "./RegisterReducer";
import searchPublicationReducer from "./SearchPublication";


const reducerApp = combineReducers({
  publicationsReducer,
  loginReducer,
  technologiesReducer,
  registerReducer,
  searchPublicationReducer,
});

export default reducerApp
