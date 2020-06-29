import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';

import Swiper from 'react-native-swiper';

import styles from './Style';
import IBanner from '../../interface/Banner'
import api from '../../services/api';

const Banner = () => {
    const [banner, setBanner] = useState<IBanner[]>([])

    async function loadBanners() {
        try {
            const response = await api.get('mobile/banners');
            const { data } = response;
            setBanner(data);
        } catch (err) {
            console.log('ERROR LOADING BANNERS', err);
        }
    }

    useEffect(() => {
        loadBanners();
    }, [])

    return (
        banner.length > 0 ?
        <View style={styles.banner}>
            <Swiper 
                style={styles.swipper} 
                showsButtons={true} 
                horizontal
                activeDotColor={"#d2ae6c"}
                showsPagination={true}
                autoplay={true} 
                loop={true}
                index={0}
                nextButton={<></>}
                prevButton={<></>}
            >
                {banner && banner.map(banner => {
                    return (
                        <View style={styles.view} key={String(banner.id)}>
                            <Image style={styles.image} source={{ uri: banner.image_url}} ></Image>
                        </View>
                    )
                    })}
            </Swiper>
        </View>
        :
        <></>
    )
}

export default Banner;