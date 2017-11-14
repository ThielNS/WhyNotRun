import { LIST_POSTS, ERRO_POSTS } from '../constants/actionTypes';
import { urlPublications } from '../constants/routesApi';

export const listPosts = () => dispatch => {
  return fetch(urlPublications)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: LIST_POSTS,
        data
      })
    })
    .catch(erro => {
        // throw new Error("RequestError",{ type: ERRO_POSTS, message: erro.message });
    });
};

export const addPost = (title, text, idTech, idUser) => dispatch => {

  const bodyParameters= {
    title: title,
    description: text,
    techies: idTech,
    user: idUser
  };

  fetch(urlPublications, {
    method: 'post',
    body: JSON.stringify(bodyParameters),
    headers: { 'Content-type': 'application/json' }
  })
  .then(response => response.json())
  .catch(erro => { type: ERRO_POSTS, erro });
}