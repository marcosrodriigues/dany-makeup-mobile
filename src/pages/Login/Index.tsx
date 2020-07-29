import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, Alert } from 'react-native';

import style from './Style';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import SocialMediaButtons from '../../components/SocialMediaButtons/Index';

import { signIn, signInFacebook } from '../../services/auth';
import { useDispatch } from 'react-redux';
import GifLoading from '../../components/GifLoading/Index';

const Login = ({ navigation, route }) => {
    const [loading, isLoading] = useState(false)
    const [email, setEmail] = useState<string>('marcos.rodriiigues@gmail.com');
    const [password, setPassword] = useState<string>('123456');
    
    const dispatch = useDispatch();

    function handleClickCadastre() {
        navigation.navigate("Register");
    }

    async function handleLoginClick() {
        isLoading(true);
        try {
            const { user, token } = await signIn({ email, password });
            dispatch({ type: 'USER_ONLINE', user, token });

            const { onSignIn, RedirectTo, params } = route.params;

            onSignIn && onSignIn(user);
            RedirectTo ? navigation.navigate(RedirectTo, params) : navigation.goBack();
        } catch (err) {
            Alert.alert("Atenção", "Email e/ou senha inválidos. Verifique e tente novamente.")
            console.log('ERROR LOGIN', err);
        }
        isLoading(false);
    }

    async function handleLoginFb() {
        isLoading(true);
        try {
            const { user, token } = await signInFacebook();
            dispatch({ type: 'USER_ONLINE', user, token });
            const { onSignIn, RedirectTo, params } = route.params;

            onSignIn && onSignIn(user);
            RedirectTo ? navigation.navigate(RedirectTo, params) : navigation.goBack();
        } catch (error) {
            Alert.alert("Facebook Login Error", error);
            console.log('ERROR LOGIN FACEBOOK', error)
        }
        isLoading(false);
        
    }

    return (
        <ScrollView contentContainerStyle={style.container}>
            <View>
                <HeaderStackMenu title="Login" />
            </View>
            <View style={style.header}>
                <Image source={require('../../assets/images/banner/banner_1.png')} ></Image>
            </View>
            
            { loading ? <View style={style.all}><GifLoading /></View> : <></> }

            <View style={style.content}>
                <SocialMediaButtons handleFacebookClick={() => handleLoginFb()} />
                <Text style={style.textOu}>ou</Text>
                <View style={style.fields}>
                    <TextInput 
                        style={style.field} 
                        keyboardType="email-address" 
                        value={email} autoCapitalize="none" 
                        placeholderTextColor="#d2ae6c" 
                        placeholder="Endereço de email" 
                        onChangeText={text => setEmail(text)}  
                    />
                    <TextInput style={style.field} secureTextEntry={true} value={password}   placeholderTextColor="#d2ae6c" placeholder="Senha" onChangeText={text => setPassword(text)}  /> 

                    <TouchableOpacity style={[style.button]} onPress={handleLoginClick}>
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