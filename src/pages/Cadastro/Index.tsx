import React, { useState } from 'react';

import style from './Style';
import { View, Text, Image, Alert } from 'react-native';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import SocialMediaButtons from '../../components/SocialMediaButtons/Index';

import * as Facebook from 'expo-facebook';
import api_fb from '../../services/api_fb';
import GifLoading from '../../components/GifLoading/Index';


const Cadastro = () => {
    const [loading, isLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const navigation = useNavigation();

    async function handleCadastrarButton() {
        if (name === '' || email === '' || password === '') {
            Alert.alert("Hey", "Preencha os campos")
            return;
        }
        isLoading(true)
        try {
            await api.post('users', { name, email, password });
            Alert.alert("Sucesso", "Agora é só fazer login!")
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert('Hey', 'Ocorreu um erro ao cadastrar\n' + error);
            console.log('ERROR SAVE USER', error)
        }
        isLoading(false)
    }

    async function handleCadastrarFB() {
        isLoading(true)
        try {
            await Facebook.initializeAsync();

            const {
                type,
                token,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile', 'email']
            });

            if (type == 'success') {
                const fb_response = await api_fb.get(`/me?access_token=${token}&fields=id,name,picture,email`);
                const { email, id, name, picture  } = fb_response.data;

                const { url } = picture.data;

                if (!email) {
                    Alert.alert("Facebook Error", "Não foi possível obter seu e-mail");
                    return;
                }

                const response = await api.post(
                    'users', 
                    { name, email, fb_id: id, avatar: url }
                );

                if (response.status === 200) {
                    Alert.alert("Sucesso", "Agora é só fazer login")!
                    navigation.navigate('LoginRoutes', {
                        screen: {
                            name: "Login"
                        }
                    });
                } else {
                    const { error } = response.data;
                    Alert.alert("Cadastro Error!", error);
                }
            }
        } catch (err) {
            console.log(err);
            Alert.alert("Facebook Login Error", err.message);
        }
        isLoading(false)
    }

    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={{width: '100%', paddingBottom: 8}}>
                <HeaderStackMenu title="Cadastro" />
            </View>
            <View style={style.header}>
                <Image source={require('../../assets/images/banner/banner_1.png')} ></Image>
            </View>
            
            { loading ? <View style={style.all}><GifLoading /></View> : <></> }

            <View style={[style.content]}>
                <SocialMediaButtons 
                    handleFacebookClick={() => handleCadastrarFB()} 
                    title={"Cadastre-se usando suas redes"}
                />
                    
                <Text style={style.textOu}>ou</Text>
                <View style={[style.section, style.fields]}>
                    <TextInput style={style.field} autoCapitalize="words" value={name} onChangeText={text => setName(text)} placeholderTextColor="#d2ae6c" placeholder="Nome social"  />
                    <TextInput style={style.field} autoCapitalize="none" value={email} onChangeText={text => setEmail(text)} keyboardType="email-address" placeholderTextColor="#d2ae6c" placeholder="Endereço de email"  />
                    <TextInput  style={style.field} value={password} onChangeText={text => setPassword(text)} secureTextEntry={true}   placeholderTextColor="#d2ae6c" placeholder="Senha" /> 

                    <TouchableOpacity style={[style.button]} onPress={() => handleCadastrarButton()}>
                        <Text style={style.textButton}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={style.textOu}>Já tenho cadastro</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}

export default Cadastro;