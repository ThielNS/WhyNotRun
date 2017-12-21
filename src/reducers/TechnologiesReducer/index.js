import { LIST_TECHS, ERROR_TECH, TECHS_PER_POSTS, TECHS_PER_POINTS } from "./constants";

//Lista por ordem alfabética
const technologiesReducer = (state = [], action) => {
    switch (action.type) {
        case LIST_TECHS:
            return action.data;
        case TECHS_PER_POSTS:
            return action.technologies;
        case TECHS_PER_POINTS:
            return action.technologiesPoints;
        case ERROR_TECH:
            return action.message;
        default:
            return state
    }
}
export default technologiesReducer;

