import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Card } from 'react-native-elements';

import style from './Style'
import { TouchableOpacity } from 'react-native-gesture-handler';
import NumberFormat from '../../util/NumberFormat';
import { FontAwesome } from '@expo/vector-icons';

interface ICategory {
    id: number,
    title: string,
    image_url: string
}

interface IProduto{
    id: number,
    name: string,
    description: string,
    category?: [ICategory],
    image: string,
    value: number,
}
interface IParams {
    produto: IProduto,
    onClickComponent: (id : number) => void,
    onClickAdd: (id : number) => void
}

const CardProduto:React.FC<IParams> = ({ produto, onClickAdd, onClickComponent }) => {
    return (
        <Card key={produto.id} containerStyle={style.cardProduto}  >
            <View style={style.product}>
                <View style={style.viewImage}>
                    <TouchableOpacity 
                        activeOpacity={0.9} 
                        onPress={() => onClickComponent(produto.id)}
                    >
                        <Image source={{ uri : produto.image }} style={style.image}></Image>
                    </TouchableOpacity>      
                </View>
                <View style={style.info}>
                    <TouchableOpacity 
                        activeOpacity={0.9} 
                        onPress={() => onClickComponent(produto.id)}
                    >                  
                        <Text style={style.title}>{produto.name}</Text>
                        <Text style={style.subtitle}>{produto.description}</Text>

                        <NumberFormat value={produto.value} style={style.value} />  
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button} onPress={() => onClickAdd(produto.id)} >
                        <View style={style.buttonIcon}>
                        <FontAwesome name="plus" size={16}></FontAwesome>
                        </View>
                        <Text style={style.buttonText}>Quero comprar</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            </Card>
    )
}

export default CardProduto;
