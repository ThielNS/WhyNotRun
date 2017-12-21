import { REGISTER_PICTURE } from "./constants";

const registerPicture = (state=[], action) => {
    switch(action.type) {
        case REGISTER_PICTURE:
            return state;
        default:
            return state;
    }
}

export default registerPicture;