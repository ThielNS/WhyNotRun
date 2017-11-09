import { combineReducers } from 'redux';
import filterTechReducer from './filterTechReducer';

const reducerFilter = combineReducers ({
    technologies: filterTechReducer
})
export default reducerFilter;