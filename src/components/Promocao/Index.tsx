import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native'
import { Card } from 'react-native-elements'

import styles from './Style';

interface IProdutoPromocao {
    id: number,
    image: string
    name: string,
    originalValue: number,
    promotionValue: number,
    discount: string
}

const Promocao = () => {
    const [promocoes, setPromocoes] = useState<IProdutoPromocao[]>([]);

    function handleEachPromotion(item: IProdutoPromocao) {
        return (
            <Card containerStyle={styles.cardPromocao}>
                <Image source={require('../../assets/images/promocao/promocao.png')} style={styles.cardImage}></Image>
                <View style={styles.cardDescription}>
                    <Text style={styles.cardTitle}>{item.name}</Text>
                    <Text style={styles.cardOriginalValue}>De: R$ {item.originalValue}</Text>
                    <View style={styles.inline}>
                        <Text style={styles.cardNewValue}>Por: R$ {item.promotionValue}</Text>
                        <Text style={styles.cardDiscount}>({item.discount} off)</Text>
                    </View>
                </View>
            </Card>
        )
    }

    useEffect(() => {
        setPromocoes([
            {
                id: 1,
                image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
                name: 'Produto 1',
                originalValue: 59.00,
                promotionValue: 49.00,
                discount: '20%'
            },
            {
                id: 2,
                image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
                name: 'Produto 2',
                originalValue: 48.00,
                promotionValue: 35.00,
                discount: '10%'
            },
            {
                id: 3,
                image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
                name: 'Produto 3',
                originalValue: 48.00,
                promotionValue: 35.00,
                discount: '10%'
            },
            {
                id: 4,
                image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
                name: 'Produto 4',
                originalValue: 48.00,
                promotionValue: 35.00,
                discount: '10%'
            },
            {
                id: 5,
                image: 'https://edbr.vteximg.com.br/arquivos/ids/160548-1000-1000/Batom_Soul_Kiss_Me_Mate_Nude_Carmin_819772_1.jpg?v=636552622351130000',
                name: 'Produto 5',
                originalValue: 48.00,
                promotionValue: 35.00,
                discount: '10%'
            },
        ]);
    }, [])

    return (
        <>
            <Text style={styles.title}>Confira nossas promoções</Text>
            <View style={styles.promocao}>
                <FlatList 
                    contentContainerStyle={styles.flatList}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={promocoes}
                    renderItem={({item}) => handleEachPromotion(item)}
                    keyExtractor={item => String(item.id)}
                    >
                </FlatList>
            </View>
        </>
    )
}

export default Promocao;