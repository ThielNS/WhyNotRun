import { LIST_PUBLICATIONS, ERROR_PUBLICATION } from "../reducers/PublicationsReducer/constants";
import { get, post } from '../modules/request';

export const listPosts = () => dispatch => {
  return get('publications')
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

export const addPost = (title, text, idTech, idUser) => dispatch => {

  const bodyParameters = {
    title: title,
    description: text,
    techies: idTech,
    user: idUser
  };

  return post('publications', bodyParameters)
    .then()
    .catch(error => {
      throw new Error('RequestError', { type: ERROR_PUBLICATION, message: error.message });
    });
}