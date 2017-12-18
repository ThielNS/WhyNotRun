import { get } from '../modules/request';

export const search = (text, page) => dispatch => {
  get(`publications?text=${text}&page=${page}`)
    .then(data => {
      return dispatch({
        type: LIST_SEARCH,
        data
      })
    })
    .catch(error => {
      console.log
    })
};