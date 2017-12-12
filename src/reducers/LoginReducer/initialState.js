let userToken = localStorage.getItem('userToken');
let user = JSON.parse(localStorage.getItem('user'));

userToken = userToken ? userToken : null;
user = user ? user : null;

export const initialState = { userToken, user };
