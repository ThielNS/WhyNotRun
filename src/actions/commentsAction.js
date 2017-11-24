import { ADD_COMMENT} from "../reducers/Comments/constants";
import { post } from "../modules/request";

export const addComent = (postId, postIndex, userId, comment) => dispatch => {

  const bodyParameters = {
    postId: postId,
    userId: userId,
    comment: comment
  };

  return post('comments', bodyParameters)
    .then(response => response.json())
    .then(({ data }) => {
      dispatch({
        type: ADD_COMMENT,
        postIndex,
        data
      });
    })
    .catch(error => {
      throw new Error("ErrorRequest", { message: error.message });
    });
};