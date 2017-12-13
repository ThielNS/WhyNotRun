import { patch } from "../modules/request";
import { REACTIONS } from "../reducers/PublicationsReducer/constants";

export const reactions = (postId, postIndex, value) => dispatch => {
  const userId = JSON.parse(localStorage.getItem('user')).id;

  const data = {
    userId: userId,
    like: value
  };

  dispatch({
    type: REACTIONS,
    postIndex,
    postId,
    value,
  });

  patch(`publications/${postId}/react`, data)
    .then(() => {
    })
    .catch(error => {

    });
};