import { patch } from "../modules/request";
import { REACTIONS } from "../reducers/PublicationsReducer/constants";

export const reactions = (postId, postIndex, lastValue, newValue) => dispatch => {
  const userId = JSON.parse(localStorage.getItem('user')).id;

  let like;

  if(lastValue === newValue) {
    like = null;
  } else {
    like = newValue;
  }

  const data = {
    userId: userId,
    like: like
  };

  dispatch({
    type: REACTIONS,
    value: newValue,
    postIndex,
    postId,
  });

  patch(`publications/${postId}/reactions`, data)
    .then(() => {
    })
    .catch(error => {

    });
};