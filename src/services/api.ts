import axios from 'axios';

import { AsyncStorage, Alert } from 'react-native';

var api = axios.create({
    baseURL: 'http://192.168.2.14:3333',
});


api.interceptors.response.use(config => {
    return config;   
}, function(error) {
    console.log('ERROR API INTERCEPTOS RESPONSE', error)
    console.log(JSON.stringify(error))
    Alert.alert('Falha na conexão', error.message);
    return Promise.reject(error);
})

 api.interceptors.request.use(async function(config) {
    const token = await AsyncStorage.getItem('TOKEN') || undefined;

    if (token) {
        if (config.method !== 'OPTIONS') {
            config.headers.authorization = token;
        }
    }
    return config;
 }, function (error) {
    console.log('ERROR API INTERCEPTOS REQUEST', error)
     Alert.alert('Problema na requisição', error.message);
 })

export default api;