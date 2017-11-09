
const post = (state = [], action) => {
  switch(action.type) {
    case 'ADD_POST':

      const newPost = {
        id: state.length + 1,
        title: action.title,
        text: action.text,
        idTech: action.idTech,
        idUser: action.idUser,
        comments: [],
      };

      return state.concat(newPost);

    case 'API_LIST':
      return state.concat(action.data);
    case 'API_ERRO':
    default:
      return state;
  }
};

export default post;
