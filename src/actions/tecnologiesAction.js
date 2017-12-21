import { LIST_TECHS } from "../reducers/TechnologiesReducer/constants";
import { get } from '../modules/request';


export const listTechs = text => dispatch => {
  return get(`technologies?text=${text}`)
    .then(data => (
      dispatch({
        type: LIST_TECHS,
        data
      })
    ))
    .catch(error => {
      // throw new Error("RequestError", { type: ERROR_TECH, message: error.message });
    });
};
