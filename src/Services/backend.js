import axios from "axios";

export async function doAuth(url, data) {
    return await axios.post(`http://cebo.uz/api/${url}`, data)
    .then(data => {
        localStorage.setItem('token', data.data.accessToken)
        window.location.reload()
    })
}

export async function doPostPro(url, data) {
    
    axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = 'bearer ' + token;
        }
    
        return config;
    });
    return await axios.post(`http://cebo.uz/api/${url}`, data)
    .then(data => data)
}

export async function doPost(url, data) {
    return await axios.post(`http://cebo.uz/api/${url}`, data)
    .then(data => data)
}

export async function getProducts(url) {
   
    return await axios.get(`http://cebo.uz/api/${url}`)
    .then(data=>data.data['hydra:member'])
    
}