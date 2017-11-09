export const getAPI = () => dispatch => {
  console.log('start');

  fetch("https://private-93e4a-whynotrun1.apiary-mock.com/feed")
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'API_LIST',
        data
      })
    })
    .catch(erro => { type: 'API_ERRO', erro });
};
