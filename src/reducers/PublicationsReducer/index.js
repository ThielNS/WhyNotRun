import { ADD_PUBLICATION, LIST_PUBLICATIONS, ERROR_PUBLICATION, ADD_COMMENT, REACTIONS, LIST_COMMENTS } from './constants';

const publicationsReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_PUBLICATION:

      const newPost = {
        id: state.length + 1,
        title: action.title,
        text: action.text,
        idTech: action.idTech,
        idUser: action.idUser,
        comments: [],
      };

      return state.concat(newPost);

    case LIST_PUBLICATIONS:

      if (action.page > 1) {
        return state.concat(action.data.publications);
      } else {
        return action.data.publications;
      }

    case ADD_COMMENT:

      const newComments = state[action.postIndex].comments.concat(action.data);

      return state.map((item, index) => {
        if(index === action.postIndex) {
          item.comments = newComments;
          item.reactions.comments++;
        }
        return item;
      });

    case REACTIONS:

      const { value } = action;

      let like = state[action.postIndex].reactions.like;
      let oldLike = like;
      let { agreeQuantity } = state[action.postIndex].reactions;
      let { disagreeQuantity } = state[action.postIndex].reactions;

      if(like === value) {
        like = null;
      } else {
        like = value;
      }

      return state.map((item, index) => {
        if(index === action.postIndex) {
          item.reactions.like = like;

          if(value) {
            item.reactions.agreeQuantity = agreeQuantity - 1;
          } else {
            item.reactions.disagreeQuantity = disagreeQuantity - 1;
          }

          if(like === true) {
            item.reactions.agreeQuantity = agreeQuantity + 1;
            if(oldLike === false) {
              item.reactions.disagreeQuantity = disagreeQuantity - 1;
            }
          } else if(like === false) {
            item.reactions.disagreeQuantity = disagreeQuantity + 1;
            if(oldLike === true) {
              item.reactions.agreeQuantity = agreeQuantity - 1;
            }
          }
        }
        return item;
      });

    case LIST_COMMENTS:

      const { data, postIndex } = action;

      const moreComments = state[postIndex].comments.concat(data);

      return state.map((item, index) => {
        if(index === postIndex) {
          item.comments = moreComments;
        }
        return item;
      });

    case ERROR_PUBLICATION:
      return action.message;
    default:
      return state;
  }
};

export default publicationsReducer;
