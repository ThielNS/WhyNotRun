import { LIST_TECHS, ERROR_TECH } from "../reducers/TechnologiesReducer/constants";
import { get } from '../modules/request';


export const listTechs = () => dispatch => {
    return get('technologies')
        .then(data => {
            return dispatch({
                type: LIST_TECHS,
                data
            });
        })
        .catch(erro => {
            throw new Error("RequestError", { type: ERROR_TECH, message: erro.message });
        });
};
