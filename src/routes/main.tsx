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
                    if (route.name === 'Home') {
                        iconName = 'ios-home';
                    } else if (route.name === 'Buscar') {
                        iconName = "ios-search"
                    } else if (route.name === 'Conta') {
                        iconName = 'ios-person';
                    } else if (route.name === 'Carrinho') {
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
            <Tab.Screen name="MainHome" component={RoutesHome} />
            <Tab.Screen name="MainBuscar" component={RoutesBuscar} />
            <Tab.Screen name="MainConta" component={RoutesConta} />
            <Tab.Screen name="MainCarrinho" component={CarrinhoRoutes} />
        </Tab.Navigator>
    </>
    )
}