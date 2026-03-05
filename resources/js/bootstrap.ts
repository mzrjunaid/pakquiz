// resources/js/bootstrap.ts
import axios from 'axios';

// explicitly set baseURL
axios.defaults.baseURL = import.meta.env.VITE_APP_URL || 'http://127.0.0.1:8000';
axios.defaults.withCredentials = true;

// optional: force http instead of https
axios.interceptors.request.use(config => {
    if (config.url?.startsWith('https://localhost')) {
        config.url = config.url.replace('https://localhost', 'http://127.0.0.1:8000');
    }
    return config;
});