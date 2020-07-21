import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Carrinho from '../pages/Carrinho/Index';
import Compra from '../pages/Compra/Index';
import ConfirmPurchase from '../pages/ConfirmPurchase/Index';

const Stack = createStackNavigator();

export default function CarrinhoRoutes() {
    return (
        <Stack.Navigator 
            headerMode="none" 
            screenOptions={{
                cardStyle: { 
                    backgroundColor: '#f0f0f5'
                }
            }}
        >
            <Stack.Screen name="Carrinho" component={Carrinho} />
            <Stack.Screen name="Compra" component={Compra} />
            <Stack.Screen name="ConfirmPurchase" component={ConfirmPurchase} />
        </Stack.Navigator>
    )
}