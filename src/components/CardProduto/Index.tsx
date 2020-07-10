import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';

import style from './Style'
import { TouchableOpacity } from 'react-native-gesture-handler';
import NumberFormat from '../../util/NumberFormat';
import AddCarrinho from '../AddCarrinho/Index';

import IParamsCardProduto from '../../interface/IParamsCardProduto';

const CardProduto:React.FC<IParamsCardProduto> = ({ produto, onClickComponent, showAddCart = true }) => {
    return (
        <Card key={produto.id} containerStyle={style.cardProduto}  >
            <View style={style.product}>
                <View style={style.viewImage}>
                    <TouchableOpacity 
                        activeOpacity={0.9} 
                        onPress={() => onClickComponent(produto.id)}
                    >
                        <Image source={{ uri : produto.image_url }} style={style.image}></Image>
                    </TouchableOpacity>      
                </View>
                <View style={style.info}>
                    <TouchableOpacity 
                        activeOpacity={0.9} 
                        onPress={() => onClickComponent(produto.id)}
                    >                  
                        <Text style={style.title}>{produto.name}</Text>
                        <Text style={style.subtitle}>{produto.shortDescription}</Text>

                        <NumberFormat value={produto.value} style={style.value} />  
                    </TouchableOpacity>

                    {
                        showAddCart && 
                            <AddCarrinho text={'add carrinho'} type="PRODUCT" item={produto} size={1} />
                    }
                </View>
                
            </View>
        </Card>
    )
}

export default CardProduto;
