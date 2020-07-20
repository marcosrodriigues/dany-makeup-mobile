import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import style from './Style';

import IAddCarrinhoButton from '../../interface/IParamsAddCarrinhoButton';
import { useSelector, useDispatch } from 'react-redux';

const AddCarrinho:React.FC<IAddCarrinhoButton> = ({ 
        item, 
        text = 'carrinho', 
        size = 2, 
        type = "PRODUCT" }) => {

    const sizeFont = 14 + 2 * size;
    const sizeButton = 20 + 10 * size;

    const items = useSelector((state: any) => state.items);
    const dispatch = useDispatch();

    function handleClickAddCarrinho() {
        const cartItem = {
            id: item.id,
            type: type,
            name: item.name,
            image: item.image_url,
            value: type === "PRODUCT" ? item.value : item.promotionValue,
            quantity: 1,
            amount: item.amount || 1
        }

        let itemExistInItems = false;
        const nItems = items.map((i: any) => {
            if (i.type === cartItem.type && i.id === cartItem.id) {
                itemExistInItems = true;
                return {
                    ...i,
                    quantity : (i.quantity + 1)
                }
            } 
            return i;
        })

        if (!itemExistInItems) {
            dispatch({ type: 'ADD_ITEMS', items: cartItem});
            return;
        }

        dispatch({ type: 'ALTER_ITEMS ', items: nItems});
    }

    return (
        <TouchableOpacity
            style={[style.button, { height: sizeButton }]}
            onPress={handleClickAddCarrinho}
        >
            <View style={[style.vIcon]}>
                <FontAwesome
                    name="plus" 
                    size={sizeFont}
                    style={[style.icon, { height: sizeButton, width: sizeButton }]}
                ></FontAwesome>
            </View>
            <View style={[style.vText, { height: sizeButton  }]}>
                <Text style={[style.textButton, { fontSize: sizeFont }]}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AddCarrinho;