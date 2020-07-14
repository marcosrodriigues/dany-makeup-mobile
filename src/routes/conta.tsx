import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Conta from '../pages/Conta/Index'
import Perfil from '../pages/Perfil/Index';
import AddressRoutes from './address';
import CreditCardRoutes from './creditcard';

const ContaStack = createStackNavigator();

export default function ContaRoutes() {
    
    return (
        <ContaStack.Navigator 
            initialRouteName="Conta"
            headerMode="none"
            screenOptions={{
                cardStyle: { 
                    backgroundColor: '#f0f0f5'
                }
            }}
        >
            <ContaStack.Screen name="Conta" component={Conta} />
            <ContaStack.Screen name="Perfil" component={Perfil} />
            <ContaStack.Screen name="Enderecos" component={AddressRoutes} />
            <ContaStack.Screen name="CreditCard" component={CreditCardRoutes} />
            
        </ContaStack.Navigator>
    )
}