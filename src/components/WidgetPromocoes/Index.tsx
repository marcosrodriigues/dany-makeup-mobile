import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native'
import { Card } from 'react-native-elements'

import styles from './Style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import AddCarrinho from '../AddCarrinho/Index';
import GifLoading from '../GifLoading/Index';

const WidgetPromocoes = () => {
    const [isLoading, changeLoading] = useState(true);
    const [promocoes, setPromocoes] = useState<any[]>([]);

    const navigation = useNavigation();

    function handleClick(item: any) {
        navigation.navigate('Promocao', { promotion : item })
    }

    async function loadPromotions() {
        changeLoading(true);
        try {
            const response = await api.get('mobile/promotions');
            const { data } = response;
            setPromocoes(data);
        } catch (err) {
            console.log('ERROR LOADING PROMOTIONS', err);
        }
        changeLoading(false);
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
                    <Image source={{ uri: item.image_url }} style={styles.cardImage}></Image>
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
                </TouchableOpacity>

                <View style={[styles.mt16, styles.card]}>
                    <AddCarrinho
                        item={item}
                        size={2}
                        text={"add carrinho"}
                        type={"PROMOTION"}
                    />
                </View>
            </Card>
        )
    }

    return (
        <>
            <Text style={styles.title}>Confira nossas promoções</Text>
            <View style={styles.promocao}>
            {
            promocoes.length > 0 && !isLoading ? 
                <FlatList 
                    contentContainerStyle={styles.flatList}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={promocoes}
                    renderItem={({item}) => handleEachPromotion(item)}
                    keyExtractor={item => String(item.id)}
                    >
                </FlatList>
                :
                isLoading ? 
                    <GifLoading />
                :
                <View style={{justifyContent: 'center', alignItems: 'center', width: '100%'}}> 
                    <Text style={{fontSize: 20}}>Sem promoções no momento</Text>
                </View>
            }
            </View>
        </>
    )
}

export default WidgetPromocoes;