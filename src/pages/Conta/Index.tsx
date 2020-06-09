import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

import style from './Style'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';

const Conta = () => {
    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={style.info}>
                <View style={style.circle}>
                    <Image source={require('../../assets/images/no-user.png')} 
                        style={[style.image]}></Image>
                </View>
                
                <View style={style.infoText}>
                    <Text style={style.text}>Bem vindo, convidado.</Text>
                    <Link to="/Login" style={style.text}><FontAwesome name="user" size={20} /> Fazer login</Link>
                </View>
            </View>
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