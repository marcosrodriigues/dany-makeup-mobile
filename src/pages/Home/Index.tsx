import React, { useEffect, useState } from 'react';
import { View, ScrollView, ImageBackground } from 'react-native';

import styles  from './Style' ;

import Banner from '../../components/Banner/Index';
import WidgetPromocoes from '../../components/WidgetPromocoes/Index'
import MaisVendidos from '../../components/MaisVendidos/Index'

const Home = () => {
    return (
      <ScrollView contentContainerStyle={styles.container}>
          <ImageBackground style={styles.imageBackground} source={require('../../../src/assets/images/dany-makeup-169h.png')}  />
          {/* <Banner /> */}
          <View style={styles.content}>
            <View style={styles.section}>
              <WidgetPromocoes />
            </View>
            <View style={styles.section}>
              {/* <MaisVendidos /> */}
            </View>
          </View>
      </ScrollView>
    )
}

export default Home;

