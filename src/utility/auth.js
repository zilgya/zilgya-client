import axios from "axios";

export const doLogin = (body) => {
    return axios.post("https://zilgya-api.herokuapp.com/auth", body)
}