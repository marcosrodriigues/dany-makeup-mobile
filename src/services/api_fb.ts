import axios from 'axios';

const api_fb = axios.create({
    baseURL: `https://graph.facebook.com`,
});

export default api_fb;