import React, { useState } from 'react';
import { Text, View, Image, ScrollView, Modal } from 'react-native';

import style from './Style';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import { TextInput, TouchableOpacity,  } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const navigation = useNavigation();

    function handleClickCadastre() {
        navigation.navigate('Cadastro')
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
                    <TextInput style={style.field} keyboardType="email-address" placeholderTextColor="#d2ae6c" placeholder="Endereço de email" onChangeText={text => console.log(text)}  />
                    <TextInput  style={style.field} secureTextEntry={true}   placeholderTextColor="#d2ae6c" placeholder="Senha" onChangeText={text => console.log(text)}  /> 

                    <TouchableOpacity style={[style.button]}>
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