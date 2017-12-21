import { combineReducers } from 'redux';
import publicationsReducer from './PublicationsReducer';
import loginReducer from "./LoginReducer";
import technologiesReducer from "./TechnologiesReducer";
import registerReducer from "./RegisterReducer";
import searchPublicationReducer from "./SearchPublication";
import registerPicture from "./RegisterPicture";


const reducerApp = combineReducers({
  publicationsReducer,
  loginReducer,
  technologiesReducer,
  registerReducer,
  searchPublicationReducer,
  registerPicture
});

export default reducerApp
