import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, Alert } from 'react-native';

import style from './Style';

import AddCarrinho from '../AddCarrinho/Index'
import NumberFormat from '../../util/NumberFormat';
import IParamProduto from '../../interface/IParamProduto';
import IProduct from '../../interface/IProduto';
import api from '../../services/api';
import GifLoading from '../GifLoading/Index';
const ProdutoDetail:React.FC<IParamProduto> = ({ product }) => {
    const [isLoading, changeLoading] = useState(false);
    const [produto, setProduto] = useState<IProduct>({} as IProduct)

    useEffect(() => {
        setProduto(product);
        if (product.id) initProduct();
    }, [product])

    async function initProduct() {
        try {
            changeLoading(true);
            const { data } = await api.get(`products/${product.id}`);

            let api_product = data.product;
            let images = data.images;

            api_product.images = images.map((img: any) => img.url);

            setProduto(api_product);
            changeLoading(false);
        } catch (err) {
            console.log(err);
            Alert.alert('Erro ao carregar informações do produto', err.message);
        }
    }

    function handleFlatImage(item: string) {
        return (
            <View key={item} style={style.card}>
                <Image source={{uri: item}} style={style.image} />
            </View>
        )
    }
    return (
        !isLoading ? 
        <View style={style.content}>
            {
            produto.images ? 
                <View style={style.sectionImage}> 
                    <FlatList 
                        horizontal
                        pagingEnabled={true}
                        contentContainerStyle={style.scrollView}
                        showsHorizontalScrollIndicator={true}
                        data={produto.images}
                        keyExtractor={item => String(item)}
                        renderItem={({item}) => handleFlatImage(item)}
                    />
                </View>
            : <></>}
            <View style={style.sectionDescription}>

                <Text style={style.name}>{produto.name}</Text>
                <Text style={style.shortDescription}>{produto.short_description}</Text>

                <View style={style.viewCarrinho}>
                    <View style={style.priceInfo}>
                        <Text style={style.preValue}>Por apenas:</Text>
                        <NumberFormat value={produto.value} style={style.value} />  
                    </View>
                    <View style={style.addCarrinho}>
                        <AddCarrinho 
                            item={produto} 
                            type="PRODUCT" 
                        text={'Quero comprar'} size={3} />
                    </View>
                </View>

                <Text style={style.fullDescription}>{produto.full_description}</Text>
            </View>
        </View>
        :
        <View style={style.content}>
            <GifLoading />
        </View>
    )
}

export default ProdutoDetail;