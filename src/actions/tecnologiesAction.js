import { LIST_TECHS, TECHS_PER_POSTS } from "../reducers/TechnologiesReducer/constants";
import { get } from '../modules/request';

//Lista por ordem alfabética
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

//Lista por Quantidade de publicações
export const listTechsPerPosts = () => dispatch => {
  return get('technologies')
  .then(technologies => (
    dispatch({
      type: TECHS_PER_POSTS,
      technologies,
    })
  ))
}

//Lista por quantidade de pontos
export const listTechsPerPoints = () => dispatch => {
  return get('technologies')
  .then(technologies => (
    dispatch({
      type: 'TECHS_PER_POINTS',
      technologies
    })
  ))
}


