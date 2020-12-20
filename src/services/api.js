import axios from 'axios';

const api = axios.create({
    baseURL: "http://links.local/api"
});

export default api;

