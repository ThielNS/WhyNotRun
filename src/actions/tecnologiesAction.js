import { LIST_TECHS, TECHS_PER_POSTS, TECHS_PER_POINTS } from "../reducers/TechnologiesReducer/constants";
import { get } from '../modules/request';

export const searchTechs = text => dispatch => {
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

export const listTechs = page => dispatch => {
  return get(`technologies?page=${page}&order=name`)
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
export const listTechsPerPosts = page => dispatch => {
  return get(`technologies?page=${page}&order=posts`)
  .then(technologies => (
    dispatch({
      type: TECHS_PER_POSTS,
      technologies,
    })
  ))
}

//Lista por quantidade de pontos
export const listTechsPerPoints = page => dispatch => {
  return get(`technologies?page=${page}&order=points`)
  .then(technologiesPoints => (
    dispatch({
      type: TECHS_PER_POINTS,
      technologiesPoints
    })
  ))
}


