import React, { useState } from 'react';

import style from './Style';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

const Cadastro = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const navigation = useNavigation();

    function handleCadastrarButton() {
        api.post('users', { name, email, password }).then(response => {
            if (response.status === 200) {
                console.log(response.data);
                alert('Usuário criado!');
                navigation.goBack();
            }
        }, err =>{
            alert('Ocorreu um erro ao cadastrar!\n' + err);
        })
    }

    return (
        <ScrollView contentContainerStyle={style.container}>
            <View>
                <HeaderStackMenu title="Cadastro" />
            </View>
            <View style={style.header}>
                <Image source={require('../../assets/images/banner/banner_1.png')} ></Image>
            </View>
            
            <View style={[style.content]}>
                <View style={[style.section, style.media]}>
                    <Text>FB</Text>
                    <Text>G+</Text>
                </View>
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