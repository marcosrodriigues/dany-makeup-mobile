import React from 'react';
import { View, Text, Image } from 'react-native';

import style from './Style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BoxStore = ({
    onClick = (store: any) => {},
    store = {}
}) => {
    return (
        <View style={style.container}>
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={style.card}
                onPress={() => onClick(store)}
            >
                <View style={style.row}>
                    <View style={style.vImage}>
                        <Image source={{ uri: store.image_url }} style={style.image} /> 
                    </View>

                    <View style={style.column}>
                        <Text style={style.title}>{store.name}</Text>

                        <Text style={style.value}>{store.address.street}, nº{store.address.number}</Text>
                        <Text style={style.value}>{store.address.neighborhood} - {store.address.city}/{store.address.uf}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default BoxStore;