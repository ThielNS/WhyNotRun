import { LIST_PUBLICATIONS, ERROR_PUBLICATION, ADD_PUBLICATION } from "../reducers/PublicationsReducer/constants";
import { get, post } from '../modules/request';

export const listPosts = (page) => (dispatch,getState) => {
  return get(`publications?page=${page}`)
    .then(data => {
      return dispatch({
        type: LIST_PUBLICATIONS,
        page,
        data
      });
    })
    .catch(error => {
      throw new Error(`Erro ao fazer uma requisição`);
    });
};

export const addPost = bodyParameters => dispatch => {
  return post('publications', bodyParameters)
    .then(data => {
      return dispatch({
        type: ADD_PUBLICATION,
        data
      });
    })
    .catch(error => {
      throw new Error('RequestError', { type: ERROR_PUBLICATION, message: error.message });
    });
};