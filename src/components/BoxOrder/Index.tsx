import React from 'react';
import moment from 'moment'


import style from './Style';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import NumberFormat from '../../util/NumberFormat';
import { TextInputMask } from 'react-native-masked-text';


const BoxOrder = ({
    order = {} as any,
    onClick = (order: any) => {},
}) => {

    const date = moment(order.created_at).format('DD/MM/YYYY HH:mm');

    return (
        <View style={style.container}>
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={style.card}
                onPress={() => onClick(order)}
            >
                <View style={style.iconView}>
                    <Ionicons name="ios-cart" size={40} />
                </View>
                <View style={style.infoView}>
                    <View style={style.top}>
                        <Text style={style.title}>
                            Pedido #{order.id}
                        </Text>
                        <NumberFormat 
                            value={order.price}
                            style={style.title}
                        />
                    </View>
                    <View style={style.main}>
                        <Text style={style.subtitle}>
                            Items: {order.items.map((item: any) => item.name).join(', ')}
                        </Text>
                    </View>
                    <View style={style.bottom}>
                        <TextInputMask 
                            type="datetime"
                            options={
                                {
                                    format: 'DD/MM/YYYY HH:mm',
                                }
                            }
                            style={style.subtitle}
                            value={String(date)}
                        />
                        <Text style={[
                            order.transaction ? 
                                (order.transaction.status === 'paid' ? style.paid : style.pending)
                            : style.analise
                        ]}>
                                {
                                    order.transaction ? 
                                        (order.transaction.status === 'paid' ? "PAGO" : "ANÁLISE")
                                    : 'PENDENTE'
                                }
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        
    )
}

export default BoxOrder