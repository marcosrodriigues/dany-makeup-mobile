import React, { useState } from 'react';

import style from './Style';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const BoxPayment = ({
    purchase = {}
}) => {
    const [purchased, setPurchase] = useState(purchase);
    const [payment, setPayment] = useState({
        id: 0,
        payment_method: 'credit_card'
    })


    function handlePaymentMethod(payment_method: string) {
        setPayment({
            ...payment,
            payment_method
        })
    }

    return (
        <View style={style.box}>
            <View style={style.header}>
                <Text style={style.title}>Pagamento</Text>
            </View>  

            <View style={style.switch}>
                <Button 
                    style={[style.btnSwitch, payment.payment_method === 'credit_card' && style.switchActive]} 
                    onPress={() => handlePaymentMethod('credit_card')}
                >
                    <Text 
                        style={[style.switchText, payment.payment_method === 'credit_card' && style.switchActiveText]} 
                    >Cartão de crédito</Text>
                </Button>
                <Button 
                    style={[style.btnSwitch, payment.payment_method === 'boleto' && style.switchActive]} 
                    onPress={() => handlePaymentMethod('boleto')}
                >
                    <Text 
                        style={[style.switchText, payment.payment_method === 'boleto' && style.switchActiveText]} 
                    >Boleto</Text>
                </Button>
            </View>
        
            <View style={style.creditCardForm}>
                
            </View>
        </View>
    )
}

export default BoxPayment