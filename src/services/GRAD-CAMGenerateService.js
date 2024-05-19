import axios from "axios";

const base_url = "http://localhost:8080/API/Users/";

const gradCamGenerate= (userId, imageId, colormap, alpha) => {
    try {
        return axios.post(base_url + userId + "/Images/" + imageId + "/gradCAM", {"alpha": alpha, "colormap": colormap});
    } catch(error) {
        console.error('GRAD-CAM generation error:', error);
        throw new Error('GRAD-CAM generation failed');
    }
}

export default gradCamGenerate;