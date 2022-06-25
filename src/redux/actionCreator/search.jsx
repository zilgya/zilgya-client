import { GET_KEYWORD, REMOVE_KEYWORD } from "./actionString";

export const getKeyword = (value) => (dispatch) => {
  dispatch({ type: GET_KEYWORD, payload: value });
};

export const removeKeyword = () => (dispatch) => {
  dispatch({ type: REMOVE_KEYWORD, payload: null });
};
