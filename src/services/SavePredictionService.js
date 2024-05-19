import axios from "axios";

const base_url = "http://localhost:8080/API/Users/";

const saveImagePrediction = (userId, imgId, prediction) => {
    try {
        return axios.put(base_url + userId + "/Images/" + imgId + "/predict/save", { "prediction": prediction });
    } catch(error) {
        console.error('Image prediction save error:', error);
        throw new Error('Image prediction save failed');
    }
}

export default saveImagePrediction;