import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Conta from '../pages/Conta/Index'
import Login from '../pages/Login/Index'
import Cadastro from '../pages/Cadastro/Index';
import Perfil from '../pages/Perfil/Index';

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
            <ContaStack.Screen name="Login" component={Login} />
            <ContaStack.Screen name="Cadastro" component={Cadastro} />
            <ContaStack.Screen name="Perfil" component={Perfil} />
            
        </ContaStack.Navigator>
    )
}