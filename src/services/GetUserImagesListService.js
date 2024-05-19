import axios from "axios";

const base_url = "http://localhost:8080/API/Users/";

const getUserImagesListService = (id) => {
    try {
        return axios.get(base_url + id + "/Images");
    } catch(error) {
        console.error('Images fetch error:', error);
        throw new Error('Images fetch failed');
    }
}

export default getUserImagesListService;