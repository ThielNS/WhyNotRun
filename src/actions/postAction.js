export const getAPI = () => dispatch => {
  const urlAPIAry = "https://private-93e4a-whynotrun1.apiary-mock.com/feed";
  const urlLocal = "http://localhost:55816/publication/publications";
  return fetch(urlLocal)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'API_LIST',
        data
      })
    })
    .catch(erro => {
        throw new Error("RequestError",{ type: 'API_ERRO', message: erro.message });
    });
};

export const addPost = (title, text, idTech, idUser) => dispatch => {
  const urlAPIAry = "https://private-93e4a-whynotrun1.apiary-mock.com/feed";
  const urlLocal = "http://localhost:55816/publication";
  const corpo = {"Title":title, "Description":text, "Techies":idTech, "User":idUser};
  fetch(urlLocal, {method: 'post', body: JSON.stringify(corpo), headers: {'Content-type': 'application/json'}})
    .then(response => response.json())
    .catch(erro => { type: 'API_ERRO', erro });
}