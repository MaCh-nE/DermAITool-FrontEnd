import axios from "axios";

const base_url = "http://localhost:8080/API/Users/";

const getImagePredictionsService = (userId, imgId) => {
    try {
        return axios.get(base_url + userId + "/Images/" + imgId + "/predictions");
    } catch(error) {
        console.error('Image predictions fetch error:', error);
        throw new Error('Image predictions fetch failed');
    }
}

export default getImagePredictionsService;