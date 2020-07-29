import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddEndereco from '../pages/AddEndereco/Index';
import Orders from '../pages/Orders/Index';

const OrderStack = createStackNavigator();

export default function OrderRoutes () {
    return (
        <OrderStack.Navigator 
            mode="modal" 
            initialRouteName="Orders"
            headerMode="none"
        >
            <OrderStack.Screen name="Orders" component={Orders} />
            <OrderStack.Screen name="ShowOrder" component={AddEndereco} />
        </OrderStack.Navigator>
    )
}