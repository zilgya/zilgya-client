import axios from "axios";

export const GET_USER_INFO = "GET_USER_INFO";
export const PATCH_UPDATE_USER = "PATCH_UPDATE_USER";

export const getUserInfo = ({token}) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_USER_INFO,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
        isSuccess: false
      },
    });
    //get api
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_HOST_API}/user`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      timeout: 3000,
    })
      .then((result) => {
        //success get api
        dispatch({
          type: GET_USER_INFO,
          payload: {
            loading: false,
            data: result.data.data[0],
            errorMessage: false,
            isSuccess: true,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        //failed get api
        dispatch({
          type: GET_USER_INFO,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.response,
            isSuccess: false
          },
        });
      });
  };
};

export const updateUser = ({
  token,
  email,
  phone_number,
  display_name,
  first_name,
  last_name,
  delivery_address,
  birthday,
  gender,
  photo,
}) => {
  console.log("2. masuk action");
  return (dispatch) => {
    //loading
    dispatch({
      type: PATCH_UPDATE_USER,
      payload: {
        loading: true,
        data: [],
        errorMessage: false,
      },
    });
    axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_HOST_API}/user/edit`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      data: {
        email,
        phone_number,
        display_name,
        first_name,
        last_name,
        delivery_address,
        birthday,
        gender,
        photo,
      },
      timeout: 3000,
    })
      .then((result) => {
        console.log("3. success get data");
        //success get api
        dispatch({
          type: PATCH_UPDATE_USER,
          payload: {
            loading: false,
            data: result.data.data[0],
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3. failed get data");

        //failed get api
        dispatch({
          type: PATCH_UPDATE_USER,
          payload: {
            loading: true,
            data: [],
            errorMessage: error.response,
          },
        });
      });
  };
};
