import { LIST_TECHS, ERROR_TECH } from "../reducers/TechnologiesReducer/constants";
import { get } from '../modules/request';


export const listTechs = () => dispatch => {
  return get('technologies')
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
