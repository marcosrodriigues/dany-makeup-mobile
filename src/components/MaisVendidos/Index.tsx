import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native'
import { Card } from 'react-native-elements'

import Style from './Style';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GifLoading from '../GifLoading/Index';
import AddCarrinho from '../AddCarrinho/Index';

interface IProdutoMaisVendidos {
    id: number,
    image_url: string,
    name: string,
    value: number
}
const MaisVendidos = () => {
    const [products, setProducts] = useState<IProdutoMaisVendidos[]>([]);
    const [loading, isLoading] = useState(false);

    const navigation = useNavigation();

    function handleClick(item: any) {
        navigation.navigate('MainBuscar', { 
            screen: 'Produto',
            params: {
                product: item
            }
        })
    }

    useEffect(() => {
        async function load() {
            isLoading(true)
            try {
                const { data } = await api.get('mobile/most_sold');
                setProducts(data);
            } catch (error) {
                console.log('ERROR LOADING MOST_SOLD', error);
            }
            isLoading(false);
        }

        load();
    }, [])

    function handleMaisVendidos(item: IProdutoMaisVendidos) {
        return (
            <Card containerStyle={Style.cardPromocao}  >
                <TouchableOpacity
                style={Style.card}
                activeOpacity={0.9} 
                onPress={() => handleClick(item)}
                >
                    <Image source={{ uri : item.image_url }} style={Style.cardImage}></Image>
                    <View style={Style.cardDescription}>
                        <Text style={Style.cardTitle}>{item.name}</Text>
                        <Text style={Style.cardNewValue}>Por apenas {item.value}</Text>
                    </View>
                </TouchableOpacity>

                <View style={[Style.mt16, Style.card]}>
                    <AddCarrinho
                        item={item}
                        size={2}
                        text={"add carrinho"}
                        type={"PRODUCT"}
                    />
                </View>
            </Card>
        )
    }

    return(
        <>
            <Text style={Style.title}>Produtos mais vendidos</Text>
            <View style={Style.promocao}>
                {
                products.length > 0 && !loading ? 
                    <FlatList 
                    contentContainerStyle={Style.flatList}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={products}
                    renderItem={({item}) => handleMaisVendidos(item)}
                    keyExtractor={item => String(item.id)}
                    >
                    </FlatList>    
                : loading ?
                  <GifLoading />  
                : <></>
                }
            </View>
        </>
    )
}

export default MaisVendidos;