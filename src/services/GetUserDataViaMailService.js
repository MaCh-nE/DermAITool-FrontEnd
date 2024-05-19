import axios from "axios";

const base_url = "http://localhost:8080/API/Users/mail/";

const getUserDataService = (mail) => {
    try {
        return axios.get(base_url + mail);
    } catch(error) {
        console.error('UserDTO fetch error:', error);
        throw new Error('UserDTO fetch failed');
    }
}

export {getUserDataService};