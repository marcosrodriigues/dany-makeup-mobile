import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import style from './Style';
import { Text, View, Image } from 'react-native';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';
import BoxCarrinho from '../../components/BoxCarrinho/Index';

const Carrinho = () => {
    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={style.header}>
                <HeaderStackMenu 
                    title="Carrinho de compras" 
                    button={false}
                />
            </View>

            <View style={style.main}>
                <BoxCarrinho />
                
            </View>
        </ScrollView>
    )
}

export default Carrinho;