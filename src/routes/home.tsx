import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Promocao from '../pages/Promocao/Index';
import Home from '../pages/Home/Index';

const Stack = createStackNavigator();

export default function RoutesHome() {
    return (
        <Stack.Navigator 
            headerMode="none"
            initialRouteName="Home"
            screenOptions={{
                cardStyle: { 
                    backgroundColor: '#f0f0f5'
                }
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Promocao" component={Promocao} />
        </Stack.Navigator>
    )
}