import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native'


import Style from './Style';
import EachMaisVendidos from './EachMaisVendidos/EachMaisVendidos';
import IProduct from '../../interface/IProduto';
import api from '../../services/api';
import GifLoading from '../GifLoading/Index';

const MaisVendidos = () => {
    const [products, setProducts] = useState([] as IProduct[]);
    const [loading, isLoading] = useState(false);

    useEffect(() => {
        (async function load() {
            isLoading(true);
            try {
              const { data } = await api.get('mobile/most_sold');
              setProducts(data);
            } catch (error) {
                console.log('ERROR LOADING MOST_SOLD', error);
            }
            isLoading(false)
        })()
    }, [])

    return(
        <>
            <Text style={Style.title}>Produtos mais vendidos</Text>
            <View style={Style.promocao}>
                {
                loading ? <GifLoading /> : 
                products.length > 0 ? 
                    <FlatList 
                    contentContainerStyle={Style.flatList}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={products}
                    renderItem={({item}) => <EachMaisVendidos product={item} />}
                    keyExtractor={item => String(item.id)}
                    >
                    </FlatList>    
                : 
                <View style={{justifyContent: 'center', alignItems: 'center', width: '100%'}}> 
                    <Text style={{fontSize: 20}}>Sem produtos no momento</Text>
                </View>
                }
            </View>
        </>
    )
}

export default MaisVendidos;