import React from 'react';

import style from './Style'
import { View, Text } from 'react-native';
import ICreditCard from '../../interface/ICreditCard';
import { FontAwesome } from '@expo/vector-icons';

const CustomCreditCard = ({
    credit_card = {} as ICreditCard
}) => {
    return (
        <View style={style.creditcard}>
            <View style={style.header}>
                <Text style={style.headerText}>
                    {credit_card.name || 'Meu cartão de crédito'}
                </Text>
            </View>
            <View style={style.footer}>
                <View style={style.footerInfo}>
                    <Text style={style.card_number}>
                        {credit_card.card_number || 'Número do cartão'}
                    </Text>
                    <Text style={style.holder_name}>
                        {credit_card.holder_name || 'Nome no cartão'}
                    </Text>

                    <View style={style.row}>
                        <Text style={style.expiration_date}>
                        {credit_card.expiration_date || 'XX/XX'}
                        </Text>

                        <Text style={style.cvv}>
                        {credit_card.card_cvv || 'XXX'}
                        </Text>
                    </View>
                </View>
                <View style={style.footerBrand}>
                    <FontAwesome name="credit-card" color="white" size={56} />
                </View>
            </View>
        </View>
    )
}

export default CustomCreditCard