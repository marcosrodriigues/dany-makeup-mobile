import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Buscar from './pages/Buscar/Index'
import Produto from './pages/Produto/Index'

const BuscarStack = createStackNavigator();

export default function BuscarRoutes() {
    return (
        <BuscarStack.Navigator 
            headerMode="none" 
            screenOptions={{
                cardStyle: { 
                    backgroundColor: '#f0f0f5'
                }
            }}
        >
            <BuscarStack.Screen name="Buscar" component={Buscar} />
            <BuscarStack.Screen name="Produto" component={Produto} />
        </BuscarStack.Navigator>
    )
}