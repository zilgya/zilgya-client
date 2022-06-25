import { GET_KEYWORD, REMOVE_KEYWORD } from "../actionCreator/actionString";

export const searchReducer = (state = { keyword: "" }, action) => {
  switch (action.type) {
    case GET_KEYWORD:
      return { ...state, keyword: action.payload };
    case REMOVE_KEYWORD:
      return { ...state, keyword: action.payload };
    default:
      return state;
  }
};
