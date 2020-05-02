import axios from "axios"

const loginUrl = 'https://5eacab364bf71e00166a0a47.mockapi.io/extrack/v1/login'

export default class LoginService {

    async login(data) {
        return await axios.post(loginUrl, data);
    }

}