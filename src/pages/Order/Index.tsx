import React, { useState, useEffect } from 'react';

import style from './Style';
import { Alert, View } from 'react-native';
import api from '../../services/api';
import Loading from '../../components/Loading/Index';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import AccordionItems from '../../components/AccordionItems/Index';
import AccordionDelivery from '../../components/AccordionDelivery/Index';
import AccordionStore from '../../components/AccordionStore/Index';
import AccordionResume from '../../components/AccordionResume/Index';
import AccordionPayment from '../../components/AccordionPayment/Index';
import AccordionAddress from '../../components/AccordionAddress/Index';
import { ScrollView } from 'react-native-gesture-handler';
import GifLoading from '../../components/GifLoading/Index';

const Order = ({
    navigation,
    route
}) => {
    const [order, setOrder] = useState(route.params.order);
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        async function loadOrder() {
            isLoading(true);
            try {
                const { data } = await api.get(`/orders/${order.id}`)
                const { transaction } = data;

                const payment = {
                    payment_method: transaction?.payment_method || 'Em aberto',
                    credit_card: {
                        name: transaction?.card_brand || '',
                        holder_name: transaction?.card_holder_name || '',
                        last_digits: transaction?.card_last_digits || '',
                        first_digits: transaction?.card_first_digits || '',
                    },
                }


                let sub = 0;
                const items = data.items.map(item => { 
                    sub = sub + (item.unit_price * item.quantity);
                    return { value: item.unit_price, ...item}
                });

                const current_order = {
                    ...data,
                    items,
                    payment,
                    subtotal: sub
                }

                setOrder(current_order);
            } catch (error) {
                console.log('error loading order', error);
                Alert.alert('Hey', 'Ocorreu um erro ao carregar seu pedido\n' + error);
            }
            isLoading(false);
        }
        if (order.id)
            loadOrder();
    }, [route.params.order])

    return (
        <View style={style.container}>
            <HeaderStackMenu title={`Pedido ${order.id}`} />
            <ScrollView style={style.content}>
            {loading ? <GifLoading /> :
                <View style={style.info}>
                    <View style={style.section}>
                        <AccordionItems value={order.subtotal} items={order.items} />
                    </View>
                    <View style={style.section}>
                        <AccordionDelivery value={order.resume.frete} delivery={order.delivery} />
                    </View>
                    {
                        order.delivery.store &&
                        <View style={style.section}>
                            <AccordionStore store={order.delivery.store} />
                        </View>
                    }
                    <View style={style.section}>
                        <AccordionPayment name={order.payment.payment_method} payment={order.payment} />
                    </View>
                    
                    <View style={style.section}>
                        <AccordionAddress address={order.address} />
                    </View>
                    <View style={style.section}>
                        <AccordionResume value={order.resume.total} resume={order.resume} />
                    </View>
                </View>
            }
            </ScrollView>            
        </View>
    )
}

export default Order;