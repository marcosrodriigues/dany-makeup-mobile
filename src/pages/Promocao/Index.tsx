import React, { useEffect, useState } from 'react';
import { View, ImageBackground } from 'react-native';

import style from './Style';
import { ScrollView } from 'react-native-gesture-handler';

import HeaderStackMenu from '../../components/HeaderStackMenu/Index'
import { useRoute } from '@react-navigation/native';

import PromocaoDetail from '../../components/PromocaoDetail/Index';

const Promocao = () => {
    const route = useRoute();

    const [promotion, setPromotion] = useState<any>();
    const routeParams = route.params as any;

    useEffect(() => {
        setPromotion(routeParams.promotion)
    }, [route.params]);

    return (
        <ScrollView contentContainerStyle={style.container}>
            <ImageBackground style={style.imageBackground} source={require('../../../src/assets/images/dany-makeup-169h.png')}  />
            <HeaderStackMenu title={promotion?.name} />

            <View style={style.section}>
                <PromocaoDetail promotion_id={promotion?.id} />
            </View>
        </ScrollView>
        
    )
}

export default Promocao;
