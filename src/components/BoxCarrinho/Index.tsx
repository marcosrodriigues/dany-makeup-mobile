import React from 'react';
import { View, Text } from 'react-native';

import style from './Style';

const BoxCarrinho = () => {
    return (
        <View style={style.boxCarrinho}>
            <View style={style.boxTitle}>
                <Text style={style.title}>
                    Seus produtos
                </Text>
            </View>
            <View style={style.cartBox}>
                <View style={style.produtoBox}>
                    <View style={style.w20}>
                        <Text>Image</Text>
                    </View>
                    <View style={style.w40}>
                        <Text>Description</Text>
                    </View>
                    <View style={style.w20}>
                        <Text>Quantity</Text>
                    </View>
                    <View style={style.w20}>
                        <Text>Value</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default BoxCarrinho;