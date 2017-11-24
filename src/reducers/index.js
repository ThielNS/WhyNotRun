import { combineReducers } from 'redux';
<<<<<<< HEAD
import filterTechReducer from './filterTechReducer';

const reducerFilter = combineReducers ({
    technologies: filterTechReducer
})
export default reducerFilter;
=======
import publicationsReducer from './PublicationsReducer';
import loginReducer from "./LoginReducer";

const reducerApp = combineReducers({publicationsReducer, loginReducer});

export default reducerApp
>>>>>>> origin/navbar
