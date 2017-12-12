import { LIST_PUBLICATIONS, ERROR_PUBLICATION } from "../reducers/PublicationsReducer/constants";
import { get, post } from '../modules/request';

export const listPosts = () => (dispatch,getState) => {
  return get('publications?page=1')
    .then(data => {
      return dispatch({
        type: LIST_PUBLICATIONS,
        data
      });
    })
    .catch(erro => {
      throw new Error("RequestError", { type: ERROR_PUBLICATION, message: erro.message });
    });
};

export const addPost = bodyParameters => dispatch => {
  return post('publications', bodyParameters)
    .then()
    .catch(error => {
      throw new Error('RequestError', { type: ERROR_PUBLICATION, message: error.message });
    });
};