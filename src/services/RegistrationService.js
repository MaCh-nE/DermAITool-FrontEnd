import axios from "axios";

const base_url = "http://localhost:8080/API/Users";

const userRegistrationService = (formJSON) => {
    try {
        return axios.post(base_url, formJSON);
    } catch(error) {
        console.error('Registration error:', error);
        throw new Error('Registration failed');
    }
}

export {userRegistrationService};