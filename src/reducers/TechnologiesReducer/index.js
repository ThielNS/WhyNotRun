import { LIST_TECHS, ERROR_TECH, TECHS_PER_POSTS} from "./constants";

//Lista por ordem alfabética
const technologiesReducer = (state = [], action) => {
    switch (action.type) {
        case LIST_TECHS:
            return action.data;
        case ERROR_TECH:
            return action.message;
        case TECHS_PER_POSTS:   
            return action.technologies;
        default:
            return state
    }
}
export default technologiesReducer;

