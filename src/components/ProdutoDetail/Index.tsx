import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import style from './Style';

import AddCarrinho from '../AddCarrinho/Index'
import NumberFormat from '../../util/NumberFormat';
import IParamProduto from '../../interface/IParamProduto';
import IProduct from '../../interface/IProduto';
const ProdutoDetail:React.FC<IParamProduto> = ({ product }) => {
    const [produto, setProduto] = useState<IProduct>({} as IProduct)

    useEffect(() => {
        setProduto(product);
    }, [product])

    function handleFlatImage(item: string) {
        return (
            <View key={item} style={style.card}>
                <Image source={{uri: item}} style={style.image} />
            </View>
        )
    }
    return (
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
                <Text style={style.shortDescription}>{produto.shortDescription}</Text>

                <View style={style.viewCarrinho}>
                    <View style={style.priceInfo}>
                        <Text style={style.preValue}>Por apenas:</Text>
                        <NumberFormat value={produto.value} style={style.value} />  
                    </View>
                    <AddCarrinho product_id={produto.id} text={'Quero comprar'} size={3} />
                </View>

                <Text style={style.fullDescription}>{produto.fullDescription}</Text>
            </View>
        </View>
    )
}

export default ProdutoDetail;