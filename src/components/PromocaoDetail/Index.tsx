import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, Alert } from 'react-native';

import style from './Style';

import AddCarrinho from '../AddCarrinho/Index'
import NumberFormat from '../../util/NumberFormat';
import api from '../../services/api';
import CardProduto from '../CardProduto/Index';

const PromocaoDetail = ({ 
    promotion_id = 0
}) => {
    const [promotion, setPromotion] = useState<any>({})

    useEffect(() => {
        async function initPromotion() {
            try {
                const { data } = await api.get(`promotions/${promotion_id}`);
    
                let api_promotion = data.promotion;
                let images = data.images;
                let products = data.products;
    
                api_promotion.images = images.map((img: any) => img.url);
                api_promotion.products = products;
    
                setPromotion(api_promotion);
            } catch (err) {
                console.log(err);
                Alert.alert('Erro ao carregar informações da promoção', err.message);
            }
        }
        initPromotion();
    }, [promotion_id])


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
            promotion.images ? 
                <View style={style.sectionImage}> 
                    <FlatList 
                        horizontal
                        pagingEnabled={true}
                        contentContainerStyle={style.scrollView}
                        showsHorizontalScrollIndicator={true}
                        data={promotion.images}
                        keyExtractor={item => String(item)}
                        renderItem={({item}) => handleFlatImage(item)}
                    />
                </View>
            : <></>}
            <View style={style.sectionDescription}>

                <Text style={style.name}>{promotion.name}</Text>
                <Text style={style.shortDescription}>{promotion.description}</Text>

                <View style={style.viewCarrinho}>
                    <View style={style.priceInfo}>
                        <Text style={style.preValue}>De:</Text>
                        <NumberFormat value={promotion.originalValue} style={style.originalValue} /> 
                        <Text style={style.preValue}>Por apenas:</Text>
                        <NumberFormat value={promotion.promotionValue} style={style.value} />  
                    </View>
                    <View style={style.addCarrinho}>
                        <Text style={style.discount}>{promotion.discountType} {promotion.discount} off</Text>
                        <AddCarrinho 
                            item={promotion} 
                            type="PROMOTION" 
                        text={'add carrinho'} size={3} />
                    </View>
                </View>
            </View>

            {
                promotion.products &&
                promotion.products.length > 1 &&
                <View style={style.sectionDescription}>
                    <Text style={style.name}>Produtos nesta promoção</Text>

                    {promotion.products.map((prod:any) => (
                        <CardProduto 
                        onClickComponent={() => {}}
                        produto={prod} 
                        key={prod.id} />
                    ))}
                </View>
            }

        </View>
    )
}

export default PromocaoDetail;