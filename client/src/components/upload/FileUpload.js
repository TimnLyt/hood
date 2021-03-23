import axios from 'axios';

export default function fileUpload(key, featuredImage, uploadProgressHandler) {
    const formData = new FormData();
    formData.append(key,featuredImage);
    const axiosConfig = {
        url: 'http://localhost:5000/v1/upload',
        method: 'post',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        data: formData, 
        onUploadProgress: uploadProgressHandler,
     
    };

    return axios(axiosConfig);
}