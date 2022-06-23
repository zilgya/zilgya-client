import axios from "axios";

export const doLogin = (body) => {
    return axios.post("http://localhost:8000/auth", body)
}