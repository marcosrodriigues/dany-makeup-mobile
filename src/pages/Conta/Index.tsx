import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';

import style from './Style'
import { FontAwesome, MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';

import IUsuario from '../../interface/IUsuario';

import { useSelector, useDispatch } from 'react-redux';
import IStateRedux from '../../interface/IStateRedux';

import NoUserPng from '../../assets/images/no-user.png';
import { onSignOut, isSignedIn } from '../../services/auth';

const Conta = ({ navigation }) => {
    const [isLogin, setIsLogin] = useState(false);

    const user = useSelector((state:IStateRedux) => state.user) as IUsuario;
    const token = useSelector((state:IStateRedux)=> state.token);

    const dispatch = useDispatch();

    useEffect(() => {
        isSignedIn().then(sign => setIsLogin(sign))
    }, [user])

    function handleLogoutClick() {
        onSignOut();
        dispatch({ type: 'USER_OFFLINE' });
        setIsLogin(false);
    }

    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={style.info}>
                {isLogin ? (
                    <>
                        <View style={style.circle}>
                            {user.avatar ? 
                            <Image source={{ uri: user.avatar }} style={[style.image]} />
                            :
                            <Image source={NoUserPng} style={[style.image]}></Image>
                            }
                        </View>
                        <View style={style.infoText}>
                            <Text style={style.text}>{user.name}</Text>
                            <Link to="/Perfil" style={style.text}> Meu perfil</Link>
                        </View>
                    </>
                ) : ( 
                    <>
                    <View style={style.circle}>
                        <Image source={require('../../assets/images/no-user.png')} 
                            style={[style.image]}></Image>
                    </View>
                    <View style={style.infoText}>
                        <Text style={style.text}>convidado</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('LoginRoutes', {
                                screen: {
                                    name: 'Login'
                                }
                            })}>
                        <Text style={style.text}><FontAwesome name="user" size={20} /> Fazer login</Text>
                        </TouchableOpacity>
                    </View>
                    </> 
                )}
            </View>
            {isLogin ? 
                <View style={style.main}>
                    <TouchableOpacity activeOpacity={0.9} style={style.button} onPress={() => console.log("click")}>
                        <View style={style.inline}>
                            <View style={style.icon}>
                                <Ionicons name="ios-cart" size={32} />
                            </View>
                            <Text style={style.textMain}>Pedidos</Text>
                            <View style={style.icon}>
                                <FontAwesome name="arrow-right" size={32} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={style.button} onPress={() => console.log("click")}>
                        <View style={style.inline}>
                            <View style={style.icon}>
                                <FontAwesome name="heart" size={32} />
                            </View>
                            <Text style={style.textMain}>Favoritos</Text>
                            <View style={style.icon}>
                                <FontAwesome name="arrow-right" size={32} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={style.button} onPress={() => handleLogoutClick()}>
                        <View style={style.inline}>
                            <View style={style.icon}>
                                <Feather name="log-out" size={32} />
                            </View>
                            <Text style={style.textMain}>Sair</Text>
                            <View style={style.icon}>
                                <FontAwesome name="arrow-right" size={32} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            : <></>}
            <View style={style.main}>
                <TouchableOpacity activeOpacity={0.9} style={style.button} onPress={() => console.log("click")}>
                    <View style={style.inline}>
                        <View style={style.icon}>
                            <MaterialCommunityIcons name="file-document-box-check-outline" size={32} />
                        </View>
                        <Text style={style.textMain}>Políticas</Text>
                        <View style={style.icon}>
                            <FontAwesome name="arrow-right" size={32} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={style.button} onPress={() => console.log("click")}>
                    <View style={style.inline}>
                        <View style={style.icon}>
                            <MaterialIcons name="people" size={32} />
                        </View>
                        <Text style={style.textMain}>Atendimento</Text>
                        <View style={style.icon}>
                            <FontAwesome name="arrow-right" size={32} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={style.button} onPress={() => console.log("click")}>
                    <View style={style.inline}>
                        <View style={style.icon}>
                            <FontAwesome name="connectdevelop" size={32} />
                        </View>
                        <Text style={style.textMain}>Desenvolvedor</Text>
                        <View style={style.icon}>
                            <FontAwesome name="arrow-right" size={32} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Conta;