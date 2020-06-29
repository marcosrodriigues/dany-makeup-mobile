import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import NumberFormat, { CustomNumericInput } from '../../util/NumberFormat';

import style from './Style'

const ItemCart = ({
    value = {},
    onChangeAmount = (value: number) => { }
}) => {

    const [item, setItem] = useState<any>({});

    useEffect(() => {
        setItem(value);
    }, [value])

    return (
        <View style={style.productBox}>
            <View style={style.boxImage}>
                <Image source={{ uri: item.image }} style={style.image} />
            </View>
            <View style={style.boxInfo}>
                <Text style={style.infoName}>{item.name}</Text>
                <View style={style.row}>
                    <Text style={style.text}>{item.quantity}x </Text>
                    <NumberFormat
                        style={style.value}
                        value={item.value}
                    />
                </View>
                <View style={style.row}>
                    <Text style={style.text}>subtotal: </Text>
                    <NumberFormat
                        style={style.value}
                        value={Number(item.value * item.quantity)}
                    />
                </View>

                <View style={style.row}>
                    <CustomNumericInput
                        value={item.quantity}
                        maxValue={item.amount}
                        onChange={value => onChangeAmount(value)}
                    />
                </View>
            </View>
        </View>
    )
}

export default ItemCart