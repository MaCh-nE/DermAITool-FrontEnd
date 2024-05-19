import axios from "axios";

const base_url = "http://localhost:8080/API/Users/authenticate";

const userAuthenticateService = (formJSON) => {
    try {
        return axios.post(base_url, formJSON);
    } catch(error) {
        console.error('Login error:', error);
        throw new Error('Login failed');
    }
}


export {userAuthenticateService};