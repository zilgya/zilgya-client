import { GET_USER_INFO, PATCH_UPDATE_USER, DEL_USER_INFO, RESET_USER_STATE, GET_USER_INFO_REQUEST, GET_USER_INFO_FAIL } from "../actionCreator/actionString";

const initialState = {
  userResult: false,
  userInfo: false,
  isLoading: false,
  err: false,
  isSuccess: false,

  updateResult: false,
};

const UserReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO_REQUEST:
      return {
        ...prevState,
        isLoading: true,
        userResult: action.payload.data,
        err: action.payload.errorMessage,
        isSuccess: action.payload.isSuccess,
        updateResult: action.payload.isUpdate,
      };
    case GET_USER_INFO:
      return {
        ...prevState,
        isLoading: false,
        userResult: action.payload.data,
        err: action.payload.errorMessage,
        isSuccess: action.payload.isSuccess,
        updateResult: action.payload.isUpdate,
      };
    case GET_USER_INFO_FAIL:
      return {
        ...prevState,
        isLoading: false,
        userResult: action.payload.data,
        err: action.payload.errorMessage,
        isSuccess: action.payload.isSuccess,
        updateResult: action.payload.isUpdate,
      };
    case PATCH_UPDATE_USER:
      return {
        ...prevState,
        userResult: action.payload.data,
        updateResult: action.payload.data,
        isLoading: action.payload.loading,
        isSuccess: action.payload.errorMessage,
        err: action.payload.errorMessage,
      };
    case DEL_USER_INFO:
      return {
        ...prevState,
        userResult: action.payload.data,
        updateResult: action.payload.data,
        isLoading: action.payload.loading,
        isSuccess: action.payload.errorMessage,
        err: action.payload.errorMessage,
      };
    case RESET_USER_STATE:
      return {
        ...initialState,
      };
    default:
      return prevState;
  }
};

export default UserReducer;
