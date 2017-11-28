import { LIST_TECHS, ERROR_TECH } from "./constants";

const technologiesReducer = (state = [], action) => {
    switch (action.type) {
        case LIST_TECHS:
            return state.concat(action.data);
        case ERROR_TECH:
            return action.message;
        default:
            return state
    }
}

export default technologiesReducer;