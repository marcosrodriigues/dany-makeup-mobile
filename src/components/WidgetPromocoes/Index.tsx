import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native'
import { Card } from 'react-native-elements'

import styles from './Style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import AddCarrinho from '../AddCarrinho/Index';

const WidgetPromocoes = () => {
    const [promocoes, setPromocoes] = useState<any[]>([]);

    const navigation = useNavigation();

    function handleClick(item: any) {
        navigation.navigate('Promocao', { promotion : item })
    }

    async function loadPromotions() {
        try {
            const response = await api.get('mobile/promotions');
            const { data } = response;
            setPromocoes(data);
        } catch (err) {
            console.log('ERROR LOADING PROMOTIONS', err);
        }
    }

    useEffect(() => {
        loadPromotions();
    }, [])

    function handleEachPromotion(item: any) {
        return (
            <Card containerStyle={styles.cardPromocao} >
                <TouchableOpacity
                style={styles.card}
                 activeOpacity={0.9} 
                 onPress={() => handleClick(item)}
                >
                    <Image source={{ uri: item.mainImage }} style={styles.cardImage}></Image>
                    <View style={[styles.cardDescription]}>
                        <Text style={styles.cardTitle}>{item.name}</Text>
                        <Text style={styles.cardOriginalValue}>De: R$ {item.originalValue}</Text>
                        <View style={[styles.inline]}>
                            <Text style={styles.cardNewValue}>Por: R$ {item.promotionValue}</Text>
                            <Text style={[styles.cardDiscount]}>
                                ({item.discountType} {item.discount} off)
                            </Text>
                        </View>
                    </View>

                    <View style={styles.mt16}>
                        <AddCarrinho
                            item={item}
                            size={2}
                            text={"add carrinho"}
                            type={"PROMOTIONS"}
                        />
                    </View>
                    
                </TouchableOpacity>
            </Card>
        )
    }

    return (
        promocoes.length > 0 ? 
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
        :
        <></>
    )
}

export default WidgetPromocoes;