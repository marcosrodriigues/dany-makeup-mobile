import { AsyncStorage } from 'react-native';
import api from './api';
import * as Facebook from 'expo-facebook';
import api_fb from './api_fb';

export const TOKEN_KEY = "@DanyMakeUp:token";

export async function onSignIn(token: string) {
    await AsyncStorage.setItem(TOKEN_KEY, token);
    return;
}

export async function onSignOut() {
    await AsyncStorage.removeItem(TOKEN_KEY);
    return;
}

export async function isSignedIn() {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    return (token !== null) ? true : false;
}

export async function getToken() {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    return (token !== null) ? token : undefined;
}

export async function getUserOnline() {
    try {
        const { data } = await api.get('auth/me');
        const { user } = data;
        return user;
    } catch (err) {
        throw err;
    }
}

export async function signIn(userData: any) {
    try {
        const body = { email: userData.email, password: userData.password }
        const { data } = await api.post('/auth/login', body);
        const { user, token } = data;
        if (!token || !user) {
            throw "Não foi possível realizar o login"
        }

        const oficialToken = `Bearer ${token}`;
        await onSignIn(oficialToken);
        return { user, token: oficialToken };
    } catch (err) {
        throw err;
    }
}
    
export async function signInFacebook() {
    try {
        await Facebook.initializeAsync();

        const {
            type,
            token
        } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile', 'email']
        });

        if (type == 'success') {
            const fb_response = await api_fb.get(`/me?access_token=${token}&fields=id`);
            const { id } = fb_response.data;

            try {
                const response = await api.post(`/auth/facebook/${id}`)
                const { user } = response.data;
                const token_api = response.data.token;

                const oficialToken = `Bearer ${token_api}`;
            
                await onSignIn(oficialToken);
                return { user, token: oficialToken };
            } catch (error) {
                console.log("Error /auth/facebook/" + id + ": " + error);
                throw "Certifique de que sua conta está vinculada ao seu Facebook";
            }
        } else {
            throw "Você precisa aceitar para continuar";
        }
    } catch (err) {
        throw err;
    }
}
  