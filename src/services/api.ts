import axios from 'axios';
import { AsyncStorage } from 'react-native';

var api = axios.create({
    baseURL: 'http://192.168.2.14:3333',
});

api.interceptors.request.use(async function(config) {
    const token = await AsyncStorage.getItem('TOKEN');
    
    if (token) {
        if (config.method !== 'OPTIONS') {
            config.headers.authorization = token;
        }
    }
    return config;
}, function (error) {
    alert('Error: ' + error);
})

export default api;