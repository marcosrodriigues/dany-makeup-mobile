import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Orders from '../pages/Orders/Index';
import Order from '../pages/Order/Index';

const OrderStack = createStackNavigator();

export default function OrderRoutes () {
    return (
        <OrderStack.Navigator 
            mode="modal" 
            initialRouteName="Orders"
            headerMode="none"
        >
            <OrderStack.Screen name="Orders" component={Orders} />
            <OrderStack.Screen name="ShowOrder" component={Order} />
        </OrderStack.Navigator>
    )
}