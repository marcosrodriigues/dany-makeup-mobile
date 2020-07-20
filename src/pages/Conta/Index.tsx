import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';

import style from './Style'
import { FontAwesome, MaterialIcons, Ionicons, Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, useNavigation } from '@react-navigation/native';

import IUsuario from '../../interface/IUsuario';

import { useSelector, useDispatch } from 'react-redux';
import IStateRedux from '../../interface/IStateRedux';

import NoUserPng from '../../assets/images/no-user.png';
import { onSignOut, isSignedIn, signIn, getUserOnline } from '../../services/auth';
import GifLoading from '../../components/GifLoading/Index';

const Conta = ({ navigation, route }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [loading, isLoading] = useState(false);
    const [user, setUser] = useState<IUsuario>({} as IUsuario)
    const stateUser = useSelector((state: IStateRedux) => state.user) as IUsuario

    const dispatch = useDispatch();

    useEffect(() => {
        isSign()
    }, []);

    useEffect(() => {
        isSign()
    }, [stateUser])

    async function isSign () {
        isLoading(true);
        try {
            const sign = await isSignedIn();
            setIsLogin(sign);
    
            if(sign) {
                const me = await getUserOnline();
                setUser(me);
            }
        } catch (err) {
            setIsLogin(false);
            setUser({});
        }
        isLoading(false);
    }

    async function handleLogoutClick() {
        isLoading(true);
        await onSignOut();
        dispatch({ type: 'USER_OFFLINE' });
        setIsLogin(false);
        isLoading(false);
    }

    function navigate(route: string, screen = '') {
        if (screen === '') navigation.navigate(route);
        
        const params = {
            screen
        }
        navigation.navigate(route, params);
    }

    async function onSignIn(user: IUsuario) {
        isLoading(true);
        if (user !== undefined) {
            setUser(user);
            setIsLogin(true);
        }
        isLoading(false);
    }

    return (
        loading ? 
        <ScrollView contentContainerStyle={[style.container, { flex: 1, justifyContent: 'center' }]}>
            <View style={[style.info, { borderBottomWidth: 0 }]}>
                <GifLoading />
            </View>    
        </ScrollView>
        :
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
                            onPress={() => {
                                navigation.navigate('LoginRoutes', {
                                    screen: 'Login',
                                    params: {
                                        onSignIn
                                    }
                                })
                            }}>
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
                    {/* <TouchableOpacity activeOpacity={0.9} style={style.button} onPress={() => console.log("click")}>
                        <View style={style.inline}>
                            <View style={style.icon}>
                                <FontAwesome name="heart" size={32} />
                            </View>
                            <Text style={style.textMain}>Favoritos</Text>
                            <View style={style.icon}>
                                <FontAwesome name="arrow-right" size={32} />
                            </View>
                        </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity activeOpacity={0.9} style={style.button} 
                        onPress={() => navigate('Enderecos')} >
                        <View style={style.inline}>
                            <View style={style.icon}>
                                <FontAwesome name="address-card" size={32} />
                            </View>
                            <Text style={style.textMain}>Endereços</Text>
                            <View style={style.icon}>
                                <FontAwesome name="arrow-right" size={32} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.9} style={style.button} 
                        onPress={() => navigate('CreditCard')}>
                        <View style={style.inline}>
                            <View style={style.icon}>
                                <FontAwesome name="credit-card" size={32} />
                            </View>
                            <Text style={style.textMain}>Cartão de crédito</Text>
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