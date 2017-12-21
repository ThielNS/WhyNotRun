import { ADD_COMMENT, LIST_COMMENTS } from "../reducers/PublicationsReducer/constants";
import { get, post } from "../modules/request";

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

export const listComments = (postIndex, postId, commentId, limit) => dispatch => {

  get(`comments?publicationId=${postId}&lastCommentId=${commentId}&limit=${limit}`)
    .then(data => {
      return dispatch({
        type: LIST_COMMENTS,
        data,
        postIndex
      })
    })
    .catch(error => console.log());

};