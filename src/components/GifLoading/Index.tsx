import React from 'react';

import style from './Style';
import { View, Image } from 'react-native';

import LoadingGif from '../../assets/loader.gif';

const GifLoading = () => {
    return (
        <View style={style.container}> 
            <Image source={LoadingGif} style={style.gif} /> 
        </View>
    )
}

export default GifLoading