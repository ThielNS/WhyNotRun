import { ADD_POST, LIST_POSTS, ERRO_POST } from '../constants/actionTypes';

const publicationsReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_POST:

      const newPost = {
        id: state.length + 1,
        title: action.title,
        text: action.text,
        idTech: action.idTech,
        idUser: action.idUser,
        comments: [],
      };

      return state.concat(newPost);

    case 'LIST_POSTS':
      return state.concat(action.data);
    case 'API_ERRO':
    default:
      return state;
  }
};

export default publicationsReducer;
