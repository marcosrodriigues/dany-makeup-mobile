import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native'
import { Card } from 'react-native-elements'

import Style from './Style';

interface IProdutoMaisVendidos {
    id: number,
    image: string,
    name: string,
    value: number
}

const MaisVendidos = () => {
    const [products, setProducts] = useState<IProdutoMaisVendidos[]>([]);

    useEffect(() => {
        setProducts([
            {
                id: 1,
                image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
                name: 'Produto 1',
                value: 49.99 ,
            },
            {
                id: 2,
                image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
                name: 'Produto 2',
                value: 35.00,
            },
            {
                id: 3,
                image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
                name: 'Produto 3',
                value: 45.00,
            },
            {
                id: 4,
                image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
                name: 'Produto 4',
                value: 50.00,
            },
        ])
    }, [])

    function handleMaisVendidos(item: IProdutoMaisVendidos) {
        return (
            <Card containerStyle={Style.card}  >
                <Image source={{ uri : item.image }} style={Style.cardImage}></Image>
                <View style={Style.cardDescription}>
                    <Text style={Style.cardTitle}>{item.name}</Text>
                    <Text style={Style.cardValue}>Por apenas {item.value}</Text>
                </View>
            </Card>
        )
    }

    return(
        <>
            <Text style={Style.title}>Produtos mais vendidos</Text>
            <View style={Style.produtosMaisVendidos}>
                <FlatList 
                    contentContainerStyle={Style.flatList}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={products}
                    renderItem={({item}) => handleMaisVendidos(item)}
                    keyExtractor={item => String(item.id)}
                    >
                </FlatList>
            </View>
        </>
    )
}

export default MaisVendidos;