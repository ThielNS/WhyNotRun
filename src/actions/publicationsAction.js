import { LIST_PUBLICATIONS, ERROR_PUBLICATION } from "../reducers/PublicationsReducer/constants";
import { get, post } from '../modules/request';

export const listPosts = (page) => (dispatch,getState) => {

  let pageIndex = 1;

  if (page !== undefined) {
    pageIndex = page;
  }

  return get(`publications?page=${pageIndex}`)
    .then(data => {
      return dispatch({
        type: LIST_PUBLICATIONS,
        data
      });
    })
    .catch(error => {
      throw new Error(`Erro ao fazer uma requisição`);
    });
};

export const addPost = bodyParameters => dispatch => {
  return post('publications', bodyParameters)
    .then()
    .catch(error => {
      throw new Error('RequestError', { type: ERROR_PUBLICATION, message: error.message });
    });
};