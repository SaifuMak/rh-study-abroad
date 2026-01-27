import axios from 'axios';

const AXIOS_INSTANCE = axios.create({
    // baseURL: 'http://localhost:8000/'
    baseURL: 'https://test-api.startupsite.io/'

    // withCredentials: true, 
});

export default AXIOS_INSTANCE;

