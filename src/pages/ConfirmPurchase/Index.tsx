import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import api from '../../services/api';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

import style from './Style';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import AccordionItems from '../../components/AccordionItems/Index';
import AccordionDelivery from '../../components/AccordionDelivery/Index';
import AccordionResume from '../../components/AccordionResume/Index';
import AccordionPayment from '../../components/AccordionPayment/Index';
import AccordionAddress from '../../components/AccordionAddress/Index';
import AccordionStore from '../../components/AccordionStore/Index';
import GifLoading from '../../components/GifLoading/Index';

const ConfirmPurchase = ({
    navigation,
    route
}) => {
    const order = route.params.order; 
    const [loading, isLoading] = useState(false);

    async function handleConfirm() {
        isLoading(true);
        try {
            await api.post('orders', { order });
            navigation.navigate('PurchaseDone', { order });
        } catch (err) {
            console.log(err);
            Alert.alert('Hey', 'Não foi possível criar o pedido. Verifique seus dados e tente novamente.\n' + err);
        }
        isLoading(false);
    }

    return (
        
        <View style={style.container}>
            <ScrollView style={style.top}>
                <View style={style.header}>
                    <HeaderStackMenu 
                        title="Resumo da compra"
                    />
                </View>

                <View style={style.main}>
                    {loading && 
                        <View style={style.loading}>
                            <GifLoading />
                        </View>
                    }
                    <View style={style.section}>
                        <AccordionItems value={order.purchase.resume.subtotal} items={order.purchase.items} />
                    </View>
                    <View style={style.section}>
                        <AccordionDelivery value={order.purchase.resume.frete} delivery={order.purchase.delivery} />
                    </View>
                    {
                        order.purchase.delivery.store !== undefined &&
                        <View style={style.section}>
                            <AccordionStore store={order.purchase.delivery.store} />
                        </View>
                    }
                    <View style={style.section}>
                        <AccordionResume value={order.purchase.resume.total} resume={order.purchase.resume} />
                    </View>
                    <View style={style.section}>
                        <AccordionPayment name={order.payment.payment.payment_method} payment={order.payment.payment} />
                    </View>
                    <View style={style.section}>
                        <AccordionAddress address={order.payment.address} />
                    </View>
                </View>
            </ScrollView>

            <View style={style.footer}>
                <TouchableOpacity 
                        disabled={loading}
                        style={style.button}
                        onPress={() => handleConfirm()}
                    >
                        <Text style={style.btnText}>CONFIRMAR PEDIDO</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ConfirmPurchase;