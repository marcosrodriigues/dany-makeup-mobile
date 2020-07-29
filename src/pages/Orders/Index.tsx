import React, { useState, useEffect } from 'react'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import { useSelector } from 'react-redux';
import IStateRedux from '../../interface/IStateRedux';
import GifLoading from '../../components/GifLoading/Index';
import api from '../../services/api';
import { Alert, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ICreditCard from '../../interface/ICreditCard';
import BoxCreditCard from '../../components/BoxCreditCard/Index';
import style from './Style'

const Orders = ({ navigation, route }) => {
    const user = useSelector((state: IStateRedux) => state.user);
    const [loading, isLoading] = useState(false);
    const [creditCards, setCreditCards] = useState<ICreditCard[]>([]);

    useEffect(() => {
        loadOrders();
    }, [user])

    async function loadOrders() {
        isLoading(true);
        try {
            const { data } = await api.get(`credit_card/user/${user.id}`);
            setCreditCards(data);
        } catch (err) {
            Alert.alert("Atenção!", 'Problema de conexão com o servidor');
            console.log('ERROR CREDIT CARD USER', err);
        }
        isLoading(false);
    }

    function handleClickCreditCard(order: any) {
        navigation.navigate('ShowOrder', { 
            order
         })
    }

    return (
        <View style={style.container}>
            <HeaderStackMenu title={"Seus pedidos"} />
            <ScrollView contentContainerStyle={style.scrollView}>
            {
                loading ? <GifLoading /> : 
                creditCards.length > 0 ?
                creditCards.map(cc => (
                        <BoxCreditCard 
                            key={cc.id}
                            credit_card={cc}
                            onClick={handleClickCreditCard}
                            //onRemove={handleRemoveCreditCard}
                        />
                    ))
                :
                <View style={style.card}>
                    <Text style={style.noInfo}>
                        Seus pedidos aparecerão aqui!
                    </Text>
                </View>
            }    
            </ScrollView>
        </View>
    )
}

export default Orders