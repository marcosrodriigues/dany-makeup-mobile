import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, Alert } from 'react-native';

import style from './Style';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { useSelector, useDispatch } from 'react-redux'
import IStateRedux from '../../interface/IStateRedux';
import IUsuario from '../../interface/IUsuario';
import { TextInputMask } from 'react-native-masked-text';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

import NoUserPng from '../../assets/images/no-user.png';

const Perfil = () => {
    const [user, setUser] = useState<IUsuario>({} as IUsuario)
    const selecter = useSelector((state: IStateRedux) => state);
    const dispatch = useDispatch();

    const navigator = useNavigation();

    useEffect(() => {
        if (selecter.user) {
            setUser(selecter.user);
        }

        try {
            api.get('auth/me').then(response => {
                const { data } = response;
                const { user, address } = data;;
                setUser({
                    ...user,
                    address : address
                });
                return;
            })
        } catch (err) {
            Alert.alert("Atenção!", "Parece que você não está logado!");
            navigator.goBack();
        }
    }, [selecter])

    async function handleSaveClick() {
        const { id, name, email, password, whatsapp, avatar, fb_id } = user;
        try {
            const { data } = await api.put(
                'users', 
                { id, name, email, password, whatsapp, avatar, fb_id }
            );

            dispatch({ type: 'USER_UPDATE', user: data });
            Alert.alert("Sucesso", "`Suas informações foram atualizadas");    
        } catch (err) {
            Alert.alert("Atenção", "Houve um problema ao validar seus dados. Tente novamente.");
            console.log(err);
        }
    }

    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={style.header}>
                <HeaderStackMenu title="Perfil" />
            </View>
            <View style={style.info}>
                <View style={style.circle}>
                    {user.avatar ? 
                    <Image source={{ uri: user.avatar }} style={[style.image]} />
                    :
                    <Image source={NoUserPng} style={[style.image]}></Image>
                    }
                </View>
                <View style={style.infoText}>
                    <Text style={style.text}>{user.name}</Text>
                </View>
            </View>

            <View style={[style.main]}>
                <View style={style.fields}>
                    <TextInput 
                        style={style.field} 
                        autoCapitalize="words"
                        value={user.name} 
                        onChangeText={(name) => setUser({...user, name })} 
                        placeholderTextColor="#d2ae6c" 
                        placeholder="Nome" 
                    />
                    <TextInput 
                        style={style.field} 
                        value={user.email} 
                        onChangeText={(email) => setUser({...user, email })} 
                        placeholderTextColor="#d2ae6c" 
                        placeholder="Endereço de email" 
                    />
                    <TextInputMask
                        type="cel-phone"
                        options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) '
                        }}
                        style={style.field} 
                        value={user.whatsapp} 
                        onChangeText={(whatsapp) => setUser({...user, whatsapp })} 
                        placeholderTextColor="#d2ae6c" 
                        placeholder="Whatsapp"
                    />
                    
                    <TextInput
                        style={style.field} 

                        value={user.password} 
                        onChangeText={(password) => setUser({...user, password })} 
                        placeholderTextColor="#d2ae6c" 
                        placeholder="Senha" 
                        secureTextEntry={true}
                    />

                    <TouchableOpacity style={[style.button]} onPress={() => handleSaveClick()}>
                        <Text style={style.textButton}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Perfil;