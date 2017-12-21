import { get } from '../modules/request';
import { LIST_SEARCH } from "../reducers/SearchPublication/constants";

export const searchPublication = (text, page) => dispatch => {
  get(`publications?text=${text}`)
    .then(data => {
      return dispatch({
        type: LIST_SEARCH,
        data
      })
    })
    .catch(error => console.log)
};