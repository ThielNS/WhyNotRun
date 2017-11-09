
export const login = (state = [], action) => {
  switch (action.type) {
    case 'VALID_LOGIN':
      return action.token;
    default :
      return state;
  }
}