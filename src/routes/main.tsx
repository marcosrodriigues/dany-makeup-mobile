import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RoutesHome from './home';
import RoutesBuscar from './buscar';
import RoutesConta from './conta';
import IconWithBadge from '../util/IconWithBadge';
import { useSelector } from 'react-redux';
import CarrinhoRoutes from './carrinho';

const Tab = createBottomTabNavigator();

export default function MainRoutes() {

    const cartList = useSelector((state: any) => state.items)

    return (
    <>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let badgeCount = 0;
                    const name = route.name.replace('Main', '');
                    if (name === 'Home') {
                        iconName = 'ios-home';
                    } else if (name === 'Buscar') {
                        iconName = "ios-search"
                    } else if (name === 'Conta') {
                        iconName = 'ios-person';
                    } else if (name === 'Carrinho') {
                        iconName = 'ios-cart';
                        badgeCount = cartList.length;
                    }

                    return <IconWithBadge
                        name={iconName}
                        color={color}
                        size={size}
                        badgeCount={badgeCount}
                    />
                }
            })}
            tabBarOptions={{
                activeBackgroundColor: '#000000',
                inactiveBackgroundColor: '#000000',
                activeTintColor: '#d2ae6c',
                inactiveTintColor: 'gray'
            }}
        >
            <Tab.Screen name="MainHome" options={{title: 'Home' }} component={RoutesHome} />
            <Tab.Screen name="MainBuscar" options={{title: 'Buscar'}} component={RoutesBuscar} />
            <Tab.Screen name="MainConta" options={{title: 'Conta'}} component={RoutesConta} />
            <Tab.Screen name="MainCarrinho" options={{title: 'Carrinho'}} component={CarrinhoRoutes} />
        </Tab.Navigator>
    </>
    )
}