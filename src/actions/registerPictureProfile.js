import { patch } from "../modules/request";
import { ERROR_PUBLICATION } from "../reducers/PublicationsReducer/constants";

const registerPicture = (picture, userId) => dispatch => {
    
    let formData = new FormData();
    formData.set('picture', picture);

    const bodyParams = {
        formData
    };

    return patch(`users/${userId}/picture`, bodyParams)
        .then(data => {
            console.log(data);
        }) 
        .catch(error => {
            throw new Error('RequestError', { type: ERROR_PUBLICATION, message: error.message });
        })
};

export default registerPicture;