import React, { useEffect, useState } from 'react';

import MainRoutes from './main';
import LoginRoutes from './login';
import { createStackNavigator } from '@react-navigation/stack';

import { useDispatch } from 'react-redux';
import { getUserOnline, getToken } from '../services/auth';
import { AppLoading } from 'expo';

const Screen = createStackNavigator();

export default function NodeNavigator() {
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadingUser() {
            try {
                const token = await getToken();
                if (token) {
                    const user = await getUserOnline();
                    if (user) {
                        dispatch({ type: 'USER_ONLINE', user, token});
                        return;
                    }
                }
            } catch (error) {
                console.log('ERROR LOADING INIT USER', error)
            }
            dispatch({ type: 'USER_OFFLINE' });

        }
        loadingUser();
    }, [])

    return (
    <>
        <Screen.Navigator
            headerMode="none"
            mode="modal"
            initialRouteName="MainRoutes"
        >
            <Screen.Screen name="MainRoutes" component={MainRoutes} />
            <Screen.Screen name="LoginRoutes" component={LoginRoutes} />
        </Screen.Navigator>
    </>
    )
}