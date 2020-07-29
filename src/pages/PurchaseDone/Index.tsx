import React from 'react';

import { View, Text, TouchableOpacity } from "react-native";

import style from './Style';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import { FontAwesome } from '@expo/vector-icons';

const PurchaseDone = ({
    navigation,
    route
}) => {

    function handleNavigate(e: any) {
        e.preventDefault();

        navigation.navigate('MainConta', {
            screen: 'Orders'
        })
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <HeaderStackMenu 
                    title="Compra finalizada"
                    button={false}
                />
            </View>
            <View style={style.content}>
                <View style={style.confirmed}>
                    <View style={style.img}>
                        <FontAwesome name="check-circle" size={200} color="green" />
                    </View>

                    <View style={style.info}>
                        <Text style={style.title}>Pedido finalizado!</Text>
                        <Text style={style.subtitle}>Seu pedido foi salvo e você pode acompanhá-lo na seção de Pedidos no seu perfil</Text>
                    </View>

                    <View style={style.btnOrder}>
                        <TouchableOpacity style={style.btn} onPress={handleNavigate}>
                            <Text style={style.btnText}>IR PARA PEDIDOS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
} 

export default PurchaseDone;