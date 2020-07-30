import React, { useState, useEffect } from 'react'

import { ScrollView } from 'react-native-gesture-handler';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import { useSelector } from 'react-redux';
import IStateRedux from '../../interface/IStateRedux';
import GifLoading from '../../components/GifLoading/Index';
import api from '../../services/api';
import { Alert, Text, View } from 'react-native';
import style from './Style'
import BoxOrder from '../../components/BoxOrder/Index';

const Orders = ({ navigation }) => {
    const user = useSelector((state: IStateRedux) => state.user);
    const [loading, isLoading] = useState(false);
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        console.log(user);
        loadOrders();
    }, [user])

    async function loadOrders() {
        isLoading(true);
        try {
            const { data } = await api.get(`orders/user/${user.id}`);
            setOrders(data);
        } catch (err) {
            Alert.alert("Atenção!", 'Problema de conexão com o servidor');
            console.log('ERROR ORDER USER', err);
        }
        isLoading(false);
    }

    function handleClickOrder(order: any) {
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
                orders.length > 0 ?
                orders.map(order => (
                    <BoxOrder 
                        key={order.id}
                        order={order}
                        onClick={handleClickOrder}
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