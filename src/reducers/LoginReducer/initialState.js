let token = JSON.parse(localStorage.getItem('token'));
let user = JSON.parse(localStorage.getItem('user'));

token = token ? token : null;
user = user ? user : null;

export const initialState = {
  token: token,
  user: user,
};
