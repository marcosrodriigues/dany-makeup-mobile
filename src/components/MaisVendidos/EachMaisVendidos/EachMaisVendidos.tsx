import React from 'react';

import Style from '../Style'
import IProduct from '../../../interface/IProduto';
import AddCarrinho from '../../AddCarrinho/Index';

import { Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Image, View, Text } from 'react-native';

const EachMaisVendidos = ({
    product = {} as IProduct
}) => {

    const navigation = useNavigation();

    function handleClick(product: any) {
        navigation.navigate('MainBuscar', { 
            screen: 'Produto',
            params: {
                product
            }
        })
    }

    return (
        <Card containerStyle={Style.cardPromocao}>
            <TouchableOpacity
            style={Style.card}
            activeOpacity={0.9} 
            onPress={() => handleClick(product)}
            >
                <Image source={{ uri : product.image_url }} style={Style.cardImage}></Image>
                <View style={Style.cardDescription}>
                    <Text style={Style.cardTitle}>{product.name}</Text>
                    <Text style={Style.cardNewValue}>Por apenas {product.value}</Text>
                </View>
            </TouchableOpacity>

            <View style={[Style.mt16, Style.card]}>
                <AddCarrinho
                    item={product}
                    size={2}
                    text={"add carrinho"}
                    type={"PRODUCT"}
                />
            </View>
        </Card>
    )
}

export default EachMaisVendidos;