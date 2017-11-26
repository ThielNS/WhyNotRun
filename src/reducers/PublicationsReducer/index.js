import { ADD_PUBLICATION, LIST_PUBLICATIONS, ERROR_PUBLICATION } from './constants';

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
      return state.concat(action.data);
    case ERROR_PUBLICATION:
      return action.message;
    default:
      return state;
  }
};

export default publicationsReducer;
