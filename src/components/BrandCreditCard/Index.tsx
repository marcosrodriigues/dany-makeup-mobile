import React from 'react';

import style from './Style';
import { View, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const BrandCreditCard = ({
    brand = ''
}) => {

    return (
        <View>
            {brand === '' ? 
                <FontAwesome name="credit-card" size={40} />
            :
                <FontAwesome name="credit-card" size={40} />
            }
        </View>
    )

}

export default BrandCreditCard;