
const post = (url, body, dataType) => {
  fetch(url, { body: body, datatype: dataType})
    .then(response => response.json())
    .then(data => data)
    .catch(erro => error);
}