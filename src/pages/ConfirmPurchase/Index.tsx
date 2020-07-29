import React, { useState, useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import isOrderValid from '../../util/Order';

const ConfirmPurchase = ({
    navigation,
    route
}) => {
    const [order, setOrder] = useState(route.params.order); 
    const [loading, isLoading] = useState(false);
    const user = useSelector(state => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        if (user.id) {
            setOrder({
                ...order,
                user
            })
        } 
    }, [user])

    async function handleConfirm() {
        if (!user.cpf || !user.whatsapp) {
            console.log('CPF or Whatsapp empty')
            Alert.alert("Hey", 'Você precisa atualizar seu CPF e seu Whatsapp. Acesse Conta > Meu Perfil.')
            return;
        }
        if (!isOrderValid(order)) {
            console.log('orderNotValid')
            Alert.alert("Hey", 'Verifique os dados do seu pedido (items, entrega e pagamento) antes de continuar.')
            return;
        }
        
        isLoading(true);
        try {
            await api.post('orders', { order });
            dispatch({ type: 'CLEAR_ITEMS' })
            navigation.navigate('PurchaseDone', { order });
        } catch (err) {
            console.log('ERROR CONFIRM ORDER', err);
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