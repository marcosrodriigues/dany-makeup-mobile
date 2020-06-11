import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import style from './Style';
import { Text, View } from 'react-native';
import HeaderStackMenu from '../../components/HeaderStackMenu/Index';

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
                <Text>
                    Produtos
                </Text>
                <View style={style.table}>
                    
                </View>
            </View>
        </ScrollView>
    )
}

export default Carrinho;