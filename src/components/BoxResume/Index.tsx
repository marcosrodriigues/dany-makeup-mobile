import React from 'react';
import { View, Text } from 'react-native';

import style from './Style';
import NumberFormat from '../../util/NumberFormat';

const BoxResume = ({
    subtotal = 0, 
    frete = 0, 
    total = 0
}) => {

    return (
        <View style={style.box}>
            <Text style={style.title}>Resumo da compra</Text>
            <View style={style.column}>
                <View style={style.row}>
                    <Text style={style.info}>Subtotal</Text>
                    <NumberFormat 
                        style={style.value}
                        value={subtotal}
                    />
                </View>

                <View style={style.row}>
                    <Text style={style.info}>Frete</Text>
                    <NumberFormat 
                        style={style.value}
                        value={frete}
                    />
                </View>

                <View style={style.row}>
                    <Text style={style.info}>Total</Text>
                    <NumberFormat 
                        style={style.value}
                        value={total}
                    />
                </View>
            </View>
        </View>
    )
}

export default BoxResume;