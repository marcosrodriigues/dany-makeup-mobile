import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native'

import styles from './Style';

import EachPromotion from './EachPromotion/Index';
import api from '../../services/api';
import GifLoading from '../GifLoading/Index';

const WidgetPromocoes = () => {
    const [promocoes, setPromocoes] = useState([] as any);
    const [loading, isLoading] = useState(false);

    useEffect(() => {
        (async function load() {
            isLoading(true);
            try {
                const { data }= await api.get('mobile/promotions');
                if(data)
                    setPromocoes(data)
            } catch (err) {
                console.log('ERROR LOADING PROMOTIONS', err);
            }
            isLoading(false);
        })()
    }, [])


    return (
        loading ? <GifLoading /> : 
        <>
            <Text style={styles.title}>Confira nossas promoções</Text>
            <View style={styles.promocao}>
            {
            promocoes.length > 0 ?
                <FlatList 
                    contentContainerStyle={styles.flatList}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={promocoes}
                    renderItem={({item}) => <EachPromotion promotion={item} />}
                    keyExtractor={item => String(item.id)}
                    >
                </FlatList>
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