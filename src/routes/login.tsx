import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import Login from '../pages/Login/Index';
import Cadastro from '../pages/Cadastro/Index';

const Stack = createStackNavigator();

export default function LoginRoutes() {
    return (
        <Stack.Navigator
            headerMode="none"
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Cadastro} />
        </Stack.Navigator>
    )
}