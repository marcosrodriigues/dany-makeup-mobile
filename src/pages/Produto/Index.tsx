import React from 'react';
import { View, ImageBackground } from 'react-native';

import style from './Style';
import { ScrollView } from 'react-native-gesture-handler';

import HeaderStackMenu from '../../components/HeaderStackMenu/Index'

const Produto = () => {
    return (
        <ScrollView contentContainerStyle={style.container}>
            <ImageBackground style={style.imageBackground} source={require('../../../src/assets/images/dany-makeup-169h.png')}  />
            <HeaderStackMenu title={"Nome do produto"} />

            <View style={style.content}>
                
            </View>

        </ScrollView>
        
    )
}

export default Produto;
