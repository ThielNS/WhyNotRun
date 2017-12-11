import { ADD_COMMENT } from "../reducers/PublicationsReducer/constants";
import { post } from "../modules/request";

export const addComment = (postId, postIndex, text) => dispatch => {

  const userId = JSON.parse(localStorage.getItem('user')).id;

  const bodyParameters = {
    publicationId: postId,
    userId: userId,
    text: text
  };

  post('comments', bodyParameters)
    .then(data => {
      return dispatch({
        type: ADD_COMMENT,
        data,
        postIndex,
      });
    })
    .catch(error => {
      // throw new Error("ErrorRequest", { message: error.message });
    });
};

