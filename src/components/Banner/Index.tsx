import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';

import Swiper from 'react-native-swiper';

import styles from './Style';

import IBanner from '../../interface/Banner'

const Banner = () => {
    const [banner, setBanner] = useState<IBanner[]>([])

    useEffect(() => {
        setBanner([
            {
                image_url: 'https://st.depositphotos.com/1005147/4806/i/450/depositphotos_48060277-stock-photo-cosmetics-on-wooden-table.jpg'
            },
            {
                image_url: 'https://static6.depositphotos.com/1177973/667/i/450/depositphotos_6674752-stock-photo-many-professional-cosmetics-for-make.jpg'
            },
            {
                image_url: 'https://st3.depositphotos.com/11432552/14401/i/450/depositphotos_144013501-stock-photo-brushes-and-decorative-cosmetics.jpg'
            }
        ])
    }, [])

    return (
        <View style={styles.banner}>
            <Swiper 
                style={styles.swipper} 
                showsButtons={true} 
                onIndexChanged={() => {}}
                horizontal
                showsPagination={false}
                autoplay={true} 
                autoplayTimeout={5}
                nextButton={<></>}
                prevButton={<></>}
            >
                {banner.map(banner => (
                    <View style={styles.view} key={banner.image_url}>
                        <Image style={styles.image} source={{ uri: banner.image_url}} ></Image>
                    </View>
                ))}
            </Swiper>
        </View>
    )
}

export default Banner;