export const getAPI = () => dispatch => {
  const urlAPIAry = "https://private-93e4a-whynotrun1.apiary-mock.com/feed";
  const urlLocal = "http://localhost:55816/publication/publications";
  fetch(urlLocal)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'API_LIST',
        data
      })
    })
    .catch(erro => { type: 'API_ERRO', erro });
};

export const addPost = (title, text, idTech, idUser) => {

}