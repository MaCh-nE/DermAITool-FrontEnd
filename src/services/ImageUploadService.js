import axios from "axios";

const base_url = "http://localhost:8080/API/Users/";

const imageUploadService = (id, formData) => {
    try {
        return axios.post(base_url + id +"/Images", formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
    } catch(error) {
        console.error('Image upload error:', error);
        throw new Error('Image upload failed');
    }
}

export {imageUploadService};