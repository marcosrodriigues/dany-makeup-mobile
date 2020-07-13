import React from 'react';
import { Card } from 'react-native-elements';

import style from './Style';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import IAddress from '../../interface/IAddress';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BoxAddress = ({
    address = {} as IAddress,
    onClick = (address: IAddress) => {},
    onRemove = (address: IAddress) => {}
}) => {
    return (
        <View style={style.container}>
            <TouchableOpacity 
                activeOpacity={0.8} 
                style={style.card}
                onPress={() => onClick(address)}
            >
                <View style={style.iconView}>
                    <FontAwesome name="home" style={style.icon} size={40} />
                </View>
                <View style={style.infoView}>
                    <View style={style.view}>
                        <Text style={style.textName}>
                            {address.name}
                            {address.cep && `- ${address.cep}` }
                        </Text>
                    </View>

                    <View style={style.viewColumn}>
                        <Text style={style.textAddress}>
                            {address.street}, 
                            nº: {address.number} 
                            {address.complement && `, ${address.complement}`}
                            {address.neighborhood && `, ${address.neighborhood}`}.
                        </Text>
                        <Text style={style.textAddress}>
                            {address.city} - {address.uf}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onRemove(address)}
                containerStyle={style.optView}
            >
                <FontAwesome name="trash" color={"#1c1c1c"} style={style.icon} size={24} />
            </TouchableOpacity>
        </View>
        
    )
}

export default BoxAddress