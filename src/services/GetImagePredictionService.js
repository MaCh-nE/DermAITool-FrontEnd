import axios from "axios";

const base_url = "http://localhost:8080/API/Users/";

const getImagePredictionService = (userId, imgId) => {
    try {
        return axios.get(base_url + userId + "/Images/" + imgId + "/predict");
    } catch(error) {
        console.error('Image prediction fetch error:', error);
        throw new Error('Image prediction fetch failed');
    }
}

export default getImagePredictionService;