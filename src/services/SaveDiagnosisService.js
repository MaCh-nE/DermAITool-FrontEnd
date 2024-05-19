import axios from "axios";

const base_url = "http://localhost:8080/API/Users/";

const saveImageDiagnosis = (userId, imgId, diagnosis) => {
    try {
        return axios.put(base_url + userId + "/Images/" + imgId + "/diagnosis/save", { "realDiagnosis": diagnosis });
    } catch(error) {
        console.error('Image prediction save error:', error);
        throw new Error('Image prediction save failed');
    }
}

export default saveImageDiagnosis;