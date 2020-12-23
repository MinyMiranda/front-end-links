import axios from 'axios';

const api = axios.create({
    baseURL: "http://links.local",
});

export default api;

