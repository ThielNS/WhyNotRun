import { GET_TECH } from "./constants";

const filterTechnologies = (state = [], action) => {
    switch (action.type) {
        case GET_TECH:
            return state.concat(action.payload);
        default:
            return state
    }
}

export default filterTechnologies;