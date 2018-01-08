import { request } from "../modules/request";
import { ERROR_PUBLICATION } from "../reducers/PublicationsReducer/constants";

const registerPicture = (picture, userId) => dispatch => {

    let formData = new FormData();
    formData.append('picture', picture);

    const options = {
      method: 'PATCH',
      body: formData,
      contentType: null,
    };

    return request(`users/${userId}/picture`, options)
        .then(data => data)
        .catch(error => {
            throw new Error('RequestError', { type: ERROR_PUBLICATION, message: error.message });
        })
};

export default registerPicture;