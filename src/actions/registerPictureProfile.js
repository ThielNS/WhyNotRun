import { patch } from "../modules/request";
import { ERROR_PUBLICATION } from "../reducers/PublicationsReducer/constants";

const registerPicture = (picture) => (dispatch) => {
    const formData = new FormData();
    formData.append('picture', picture);

    console.log(formData);
    const bodyParams = {
        
        formData
    };

    return patch('users/{id}/picture', bodyParams)
        .then(data => {
        }) 
        .catch(error => {
            throw new Error('RequestError', { type: ERROR_PUBLICATION, message: error.message });
        })
}

export default registerPicture;