import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, Alert, ImageBackground, CameraRoll } from 'react-native';

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

import MyCamera from '../../components/MyCamera/Index';

const Perfil = () => {
    const [user, setUser] = useState<IUsuario>({} as IUsuario)
    const selecter = useSelector((state: IStateRedux) => state);

    const dispatch = useDispatch();
    const navigator = useNavigation();

    const [showCamera, setShowCamera] = useState(false);

    useEffect(() => {
        async function initUser() {
            try {
                const response = await api.get('auth/me');
                const { user } = response.data;
                setUser(user);
            } catch (err) {
                Alert.alert("Atenção!", "Parece que você não está logado!");
                navigator.goBack();
            }
        }

        initUser();
    }, [selecter])

    async function handleUpload(file: object) {
        setUser({
            ...user,
            avatar: file.uri
        })
        setShowCamera(false);
    }

    async function handleSaveClick() {
        const formData = new FormData();
        formData.append('data_user', JSON.stringify(user));
        console.log('data_user', user);
        //return;

        if (user.avatar?.startsWith('file://')) {
            const filename = user.avatar?.substring(user.avatar?.lastIndexOf('/'), user.avatar.length);
            formData.append('avatar_image', {
                uri: user.avatar,
                name: filename,
                type: 'image/jpg'
            });
        }

        try {
            const { data } = await api.put('users', formData);
            console.log('data', data)
            dispatch({ type: 'USER_UPDATE', user: data });
            Alert.alert("Sucesso", "`Suas informações foram atualizadas");    
        } catch (err) {
            Alert.alert("Atenção", "Houve um problema ao validar seus dados. Tente novamente.");
            console.log(err);
        }
    }

    function cancelCamera() {
        setShowCamera(false);
    }
    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={style.header}>
                <HeaderStackMenu title="Perfil" />
            </View>
            <View style={style.info}>
                <View style={style.circle}>
                    {
                        !showCamera ?

                            <TouchableOpacity
                                activeOpacity={0.6}
                                style={style.image}
                                onPress={() => setShowCamera(!showCamera)}
                            >
                                <Image
                                    source={ user.avatar ? { uri: user.avatar} : NoUserPng }
                                    style={style.image}                        
                                />
                            </TouchableOpacity>
                        :
                            <MyCamera
                                onCancel={cancelCamera}
                                onTakePicture={handleUpload}

                            />
                    }
                    </View>
                <View style={style.infoText}>
                    <Text style={style.text}>{user.name} </Text>
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