import { REGISTER_USER } from "./constants";

const register = (state = [], action) => {
    switch (action.type) {
        case REGISTER_USER:
            localStorage.setItem('newUser', action.data);
            const newUser = {
                user: action.data
            };
            return newUser;
        default:
            return state;
    }
};

export default register;