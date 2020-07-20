import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';

import style from './Style'
import NumberFormat from '../../util/NumberFormat';

interface Props {
    item: any;
}
const CardItem:React.FC<Props> = ({ 
    item = {}, 
}) => {
    return (
        <Card containerStyle={style.card}  >
            <View style={style.product}>
                <Image source={{ uri : item.image }} style={style.image}></Image>
                <View style={style.info}>
                    <View>
                        <Text style={style.title}>{item.quantity}x {item.name}</Text>
                        <Text style={style.subtitle}>{item.description}</Text>
                    </View>
                    <NumberFormat value={item.value} style={style.value} />  
                </View>
            </View>
        </Card>
    )
}

export default CardItem;
