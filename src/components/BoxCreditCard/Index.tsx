import React from 'react';

import style from './Style';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ICreditCard from '../../interface/ICreditCard';
import BrandCreditCard from '../BrandCreditCard/Index';

const BoxCreditCard = ({
    credit_card = {} as ICreditCard,
    onClick = (credit_card: ICreditCard) => {},
    onRemove = (credit_card: ICreditCard) => {}
}) => {
    return (
        <View style={style.container}>
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={style.card}
                onPress={() => onClick(credit_card)}
            >
                <View style={style.iconView}>
                    <BrandCreditCard brand={credit_card.brand} />
                </View>
                <View style={style.infoView}>
                    <View style={style.view}>
                        <Text style={style.textName}>
                            {credit_card.name}
                        </Text>
                    </View>

                    <View style={style.view}>
                        <Text style={style.textAddress}>
                            {credit_card.card_number}
                        </Text>
                    </View>

                    <View style={style.viewColumn}>
                        <Text style={style.textAddress}>
                            {credit_card.holder_name}
                        </Text>

                        <Text style={style.textAddress}>
                            {credit_card.expiration_date}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onRemove(credit_card)}
                containerStyle={style.optView}
            >
                <FontAwesome name="trash" color={"#1c1c1c"} style={style.icon} size={24} />
            </TouchableOpacity>
        </View>
        
    )
}

export default BoxCreditCard