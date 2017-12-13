//const API_URL = "http://localhost:55816";
const API_URL = "https://private-93e4a-whynotrun1.apiary-mock.com";
export const get = (url) =>{
  return request(url, {
    method: 'GET'
  });
};

export const post = (url, data) => {
  return request(url, {
    method: 'POST',
    body: JSON.stringify(data)
  });
};

export const patch = (url, data) => {
  return request(url, {
    method: 'PATCH',
    body: JSON.stringify(data)
  });
};

export const request = (url, options) => {
  options = {
    ...options,
    headers: new Headers(),
  };
  const token = localStorage.getItem('userToken') ? localStorage.getItem('userToken') : '';
  options.headers.append('Authorization', token);
  options.headers.append('Content-Type', 'application/json');

  return fetch(`${API_URL}/${url}`, options)
    .then(response => {
      // if(response.statusCode.toString().match(/^4/))
      //   throw new Error(`${response.statusCode} Error`);
      return response.json();
    })
    .catch(error => {
      throw new Error('Request Error', error.message);
    });
};
