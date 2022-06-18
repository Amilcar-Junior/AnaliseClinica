import http from "../../http";


export const uploadFiles = (formData) => {

    return http.post('/upload', formData);

}


