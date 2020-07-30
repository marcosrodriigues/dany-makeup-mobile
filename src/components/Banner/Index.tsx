import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import Swiper from 'react-native-swiper';

import styles from './Style';
import IBanner from '../../interface/Banner'
import EachBanner from './EachBanner/Index';
import api from '../../services/api';
import GifLoading from '../GifLoading/Index';

const Banner = () => {
    const [banner, setBanner] = useState([] as IBanner[]);
    const [loading, isLoading] = useState(false);

    useEffect(() => {
        async function load() {
            isLoading(true);
            try {
                const { data } = await api.get('mobile/banners');
                if (data)
                    setBanner(data);
            } catch (error) {
                console.log('error loading banner', error);
            }
            isLoading(false);
        }

        load();
    }, []) 

    return (
        loading ? <GifLoading /> : 
        banner.length > 0 ?
            <View style={styles.banner}>
            {banner && 
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
                    {banner.map(banner => 
                        <EachBanner key={banner.id} banner={banner} />
                    )}
                </Swiper>
            }
        </View>
        :
        <></>
    )
}

export default Banner;