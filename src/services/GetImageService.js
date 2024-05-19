import axios from "axios";

const base_url = "http://localhost:8080/API/Users/";

const getImageService = (userId, imgId) => {
    try {
        return axios.get(base_url + userId + "/Images/" + imgId);
    } catch(error) {
        console.error('Image fetch error:', error);
        throw new Error('Image fetch failed');
    }
}

export default getImageService;