import {
  FULFILLED,
  loginString,
  logoutString,
  PENDING,
  REJECTED,
} from "../actionCreator/actionString";

const initialState = {
  userInfo: false,
  token: false,
  isLoading: false,
  err: false,
  isSuccess: false,
  isLoggedIn: false,
};

const authReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case loginString + PENDING:
      return { ...prevState, err: false, isLoading: true, isSuccess: false };

    case loginString + FULFILLED:
      return {
        ...prevState,
        isLoading: false,
        isSuccess: true,
        isLoggedIn: true,
        userInfo: action.payload.data.data,
        token: action.payload.data.data.token,
      };

    case loginString + REJECTED:
      return {
        ...prevState,
        isLoading: false,
        isSuccess: false,
<<<<<<< HEAD
        err: action.payload.response.data.err.msg,
=======
        err: action.payload.response.data.err,
>>>>>>> f9d765d933d2fef4d4e3cc25a1a233e11bc0e644
      };

    case logoutString:
      return { ...initialState };

    default:
      return prevState;
  }
};

export default authReducer;
