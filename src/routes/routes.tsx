import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RoutesHome from './home';
import RoutesBuscar from './buscar';
import RoutesConta from './conta';
import Carrinho from '../pages/Carrinho/Index'

import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
    <>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'ios-home';
                    } else if (route.name === 'Buscar') {
                        iconName = "ios-search"
                    } else if (route.name === 'Conta') {
                        iconName = 'ios-person';
                    } else if (route.name === 'Carrinho') {
                        iconName = 'ios-cart';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}
            tabBarOptions={{
                activeBackgroundColor: '#000000',
                inactiveBackgroundColor: '#000000',
                activeTintColor: '#d2ae6c',
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen name="Home" component={RoutesHome} />
            <Tab.Screen name="Buscar" component={RoutesBuscar} />
            <Tab.Screen name="Conta" component={RoutesConta} />
            <Tab.Screen name="Carrinho" component={Carrinho} />
        </Tab.Navigator>
    </>
    )
}