import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Enderecos from '../pages/Endereco/Index';
import AddEndereco from '../pages/AddEndereco/Index';

const AddressStack = createStackNavigator();

export default function AddressRoutes () {
    return (
        <AddressStack.Navigator 
            mode="modal" 
            initialRouteName="Enderecos"
            headerMode="none"
        >
            <AddressStack.Screen name="Enderecos" component={Enderecos} />
            <AddressStack.Screen name="AddEndereco" component={AddEndereco} />
        </AddressStack.Navigator>
    )
}