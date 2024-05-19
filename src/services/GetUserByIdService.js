import axios from "axios";

const base_url = "http://localhost:8080/API/Users/";

const getUserByIdService = (userId) => {
    try {
        return axios.get(base_url + userId);
    } catch(error) {
        console.error('User DTO fetch failed :', error);
        throw new Error('User DTO fetch failed');
    }
}

export default getUserByIdService;