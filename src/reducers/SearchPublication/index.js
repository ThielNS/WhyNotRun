import { LIST_SEARCH } from "../SearchPublication/constants";

const search = (state = [], action) => {
  switch (action.type) {
    case LIST_SEARCH:

      return action.data;

    default:

      return state;
  }
};

export default search;