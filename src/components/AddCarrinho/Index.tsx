import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import style from './Style';

import IAddCarrinhoButton from '../../interface/IParamsAddCarrinhoButton';

const AddCarrinho:React.FC<IAddCarrinhoButton> = ({ product_id, text, size }) => {

    const sizeFont = 13 + 2 * size;
    const sizeButton = 20 + 10 * size;

    function handleClickAddCarrinho() {
        console.log("Adicionando produto " + product_id + " ao carrinho");
    }

    return (
        <TouchableOpacity
            style={[style.button, { height: sizeButton }]}
            onPress={handleClickAddCarrinho}
        >
            <View style={[style.icon, { height: sizeButton, width: sizeButton }]}>
                <FontAwesome name="plus" size={sizeFont}></FontAwesome>
            </View>

            <Text style={[style.text, { fontSize: sizeFont }]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default AddCarrinho;