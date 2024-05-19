const buildFormData = (image) => {
    const formData = new FormData();
    formData.append("image", image);
    return formData;
}

export default buildFormData;