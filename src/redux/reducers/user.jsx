import { GET_USER_INFO, PATCH_UPDATE_USER } from "../actionCreator/user";

const initialState = {
  userResult: [],
  userInfo: null,
  isLoading: false,
  err: null,
  isSuccess: null,

  updateResult: false,
};

const UserReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...prevState,
        isLoading: action.payload.loading,
        userResult: action.payload.data,
        err: action.payload.errorMessage,
        isSuccess: action.payload.isSuccess,
      };
    case PATCH_UPDATE_USER:
      return {
        ...prevState,
        updateResult: action.payload.data,
        updateLoading: action.payload.loading,
        updateError: action.payload.errorMessage,
      };
    default:
      return prevState;
  }
};

export default UserReducer;
