import axios from "axios";

export const doLogin = (body) => {
    return axios.post(`${process.env.REACT_APP_HOST_API}/auth`, body)
}