import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text } from 'react-native';

import style from './Style';
import { ScrollView } from 'react-native-gesture-handler';

import HeaderStackMenu from '../../components/HeaderStackMenu/Index'
import ProdutoDetail from '../../components/ProdutoDetail/Index';
import { useRoute } from '@react-navigation/native';

import IParamProduto from '../../interface/IParamProduto';
import IProduct from '../../interface/IProduto';

const Produto = () => {
    const route = useRoute();

    const [product, setProduct] = useState<IProduct>({} as IProduct);
    const routeParams = route.params as IParamProduto;

    useEffect(() => {
        setProduct(routeParams.product)
    }, [route.params]);

    return (
        <ScrollView contentContainerStyle={style.container}>
            <ImageBackground style={style.imageBackground} source={require('../../../src/assets/images/dany-makeup-169h.png')}  />
            <HeaderStackMenu title={product.name} />

            <View style={style.section}>
                <ProdutoDetail product={product} />
            </View>
        </ScrollView>
        
    )
}

export default Produto;
