import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, Alert, AsyncStorage, ImageBackground } from 'react-native';

import style from './Style';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import { TextInput, TouchableOpacity, TouchableHighlight,  } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import * as Facebook from 'expo-facebook';

import { useDispatch } from 'react-redux'

import api_fb from '../../services/api_fb';


import SocialMediaButtons from '../../components/SocialMediaButtons/Index';

const Login = () => {
    const [email, setEmail] = useState('marcos.rodriiigues@gmail.com');
    const [password, setPassword] = useState('123456');

    const navigation = useNavigation();
    const dispatch = useDispatch();

    function handleClickCadastre() {
        navigation.navigate('Cadastro');
    }

    async function handleLoginClick() {
        try {
            const { data } = await api.post('/auth/login', { email, password });
            const { user, token } = data;

            if (!token || !user) {
                alert('Não foi possível realizar o login');
                return;
            }
    
            const oficialToken = `Bearer ${token}`;
            dispatch({ type: 'USER_ONLINE', user, token: oficialToken});
            AsyncStorage.setItem("TOKEN", oficialToken);
            navigation.navigate('Conta');
        } catch (err) {
            Alert.alert("Atenção", "Email e/ou senha inválidos. Verifique e tente novamente.")
            console.log(err);
        }
    }

    async function handleLoginFb() {
        try {
            await Facebook.initializeAsync();

            const {
                type,
                token,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile', 'email']
            });

            if (type == 'success') {
                const fb_response = await api_fb.get(`/me?access_token=${token}&fields=id`);
                const { id } = fb_response.data;

                try {
                    const response = await api.post(`/auth/facebook/${id}`)//, { fb_id: id });
                    
                    if (response.status === 200) {
                        const { user } = response.data;
                        const token_api = response.data.token;
        
                        if (user && token_api) {
                            const oficialToken = `Bearer ${token_api}`;
                            dispatch({ type: 'USER_ONLINE', user, token: oficialToken })
                            navigation.navigate('Conta');  
                            return;
                        } 
                    } else if (response.status === 400) {
                        Alert.alert("Erro de autenticação", "Não foi possível realizar o login com o Facebook");
                        return;
                    }
                } catch (error) {
                    console.log("Error /auth/facebook/" + id + ": " + error);
                    Alert.alert("Erro de autenticação", "Certifique de que sua conta está vinculada ao seu Facebook");
                }

            }

            Alert.alert("Erro de autenticação", "Não foi possível realizar o login com o Facebook");
            return;
        } catch (error) {
            if (error.status === 400) {
                console.log(error.status);
            }
            Alert.alert("Facebook Login Error", error);
        }
        
    }

    return (
        <ScrollView contentContainerStyle={style.container}>
            <View>
                <HeaderStackMenu title="Login" />
            </View>
            <View style={style.header}>
                <Image source={require('../../assets/images/banner/banner_1.png')} ></Image>
            </View>
            <View style={style.content}>
                <SocialMediaButtons handleFacebookClick={() => handleLoginFb()} />
                <Text style={style.textOu}>ou</Text>
                <View style={style.fields}>
                    <TextInput style={style.field} keyboardType="email-address" value={email} autoCapitalize="none" placeholderTextColor="#d2ae6c" placeholder="Endereço de email" onChangeText={text => setEmail(text)}  />
                    <TextInput  style={style.field} secureTextEntry={true} value={password}   placeholderTextColor="#d2ae6c" placeholder="Senha" onChangeText={text => setPassword(text)}  /> 

                    <TouchableOpacity style={[style.button]} onPress={() => handleLoginClick()}>
                        <Text style={style.textButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
                <Text style={style.textOu}>ou</Text>
                <View style={style.fields}>
                    <TouchableOpacity style={[style.button]} onPress={handleClickCadastre}>
                        <Text style={style.textButton}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login;