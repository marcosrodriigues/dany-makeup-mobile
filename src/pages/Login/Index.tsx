import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, Alert, AsyncStorage } from 'react-native';

import style from './Style';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import { TextInput, TouchableOpacity,  } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import { useDispatch } from 'react-redux'
import axios from 'axios';

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

    return (
        <ScrollView contentContainerStyle={style.container}>
            <View>
                <HeaderStackMenu title="Login" />
            </View>
            <View style={style.header}>
                <Image source={require('../../assets/images/banner/banner_1.png')} ></Image>
            </View>
            <View style={style.content}>
                <View style={style.socialMedia}>
                    <Text style={style.white}>FB</Text>
                    <Text style={style.white}>G+</Text>
                </View>
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