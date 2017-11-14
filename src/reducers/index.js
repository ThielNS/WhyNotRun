import { combineReducers } from "redux";
import publicationsReducer from './publicationsReducer';
import loginReducer from "./loginReducer";

const reducerApp = combineReducers({publicationsReducer, loginReducer});

export default reducerApp