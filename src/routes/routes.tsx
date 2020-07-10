import React from 'react';

import MainRoutes from './main';
import LoginRoutes from './login';
import { createStackNavigator } from '@react-navigation/stack';

const Screen = createStackNavigator();

export default function NodeNavigator() {
    return (
    <>
        <Screen.Navigator
            headerMode="none"
            mode="modal"
        >
            <Screen.Screen name="MainRoutes" component={MainRoutes} />
            <Screen.Screen name="LoginRoutes" component={LoginRoutes} />
        </Screen.Navigator>
    </>
    )
}