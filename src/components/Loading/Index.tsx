import React from 'react';

import style from './Style'
import { View } from 'react-native';
import GifLoading from '../GifLoading/Index';

const Loading = () => {
    return(
        <View style={style.loading}>
            <GifLoading />
        </View>
    )
}

export default Loading;