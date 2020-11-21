import axios from 'axios';
import { AsyncStorage } from 'react-native';
import Constants from 'expo-constants';

const baseURL = Constants.manifest.extra.BASE_URL;

var api = axios.create({
    baseURL 
});


api.interceptors.response.use(config => {
    return config;   
}, function(error) {
    console.log('ERROR API INTERCEPTOS RESPONSE', error)
    //Alert.alert('Falha na conexão', error.message);
    return Promise.reject(error);
})


 api.interceptors.request.use(async function(config) {
    const token = await AsyncStorage.getItem("@DanyMakeUp:token");

    if (token !== null) {
        if (config.method !== 'OPTIONS') {
            config.headers.authorization = token;
        }
    }
    return config;
 }, function (error) {
    console.log('ERROR API INTERCEPTOS REQUEST', error)
    //Alert.alert('Problema na requisição', error.message);
 })

export default api;