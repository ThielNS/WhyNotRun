import { combineReducers } from "redux";
import post from './postReducer';

const reducerApp = combineReducers({post});

export default reducerApp