import { REGISTER_USER } from "./constants";

const register = (state = [], action) => {
    switch (action.type) {
        case REGISTER_USER:
            //return state.concat({ name: action.name, email: action.email, profession: action.profession, password: action.password, confirmPassword });
            return state;
        default:
            return state;
    }
}

export default register;