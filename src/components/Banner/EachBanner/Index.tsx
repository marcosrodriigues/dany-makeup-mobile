import React from 'react'

import styles from '../Style';
import { View, Image } from 'react-native';
import IBanner from '../../../interface/Banner';

const EachBanner = ({
    banner = { } as IBanner
}) => {
    return (
        <View style={styles.view}>
            <Image style={styles.image} source={{ uri: banner.image_url}} ></Image>
        </View>
    )
}

export default EachBanner;