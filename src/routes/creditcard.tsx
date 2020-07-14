import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Enderecos from '../pages/Endereco/Index';
import AddCreditCard from '../pages/AddCreditCard/Index';
import CreditCard from '../pages/CreditCard/Index';

const CreditCardStack = createStackNavigator();

export default function CreditCardRoutes () {
    return (
        <CreditCardStack.Navigator 
            mode="modal" 
            initialRouteName="CreditCard"
            headerMode="none"
        >
            <CreditCardStack.Screen name="CreditCard" component={CreditCard} />
            <CreditCardStack.Screen name="AddCreditCard" component={AddCreditCard} />
        </CreditCardStack.Navigator>
    )
}