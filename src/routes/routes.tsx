import React, { useEffect, useState } from 'react';

import MainRoutes from './main';
import LoginRoutes from './login';
import { createStackNavigator } from '@react-navigation/stack';

import { useSelector, useDispatch } from 'react-redux';
import IStateRedux from '../interface/IStateRedux';
import { getUserOnline } from '../services/auth';
import { AppLoading } from 'expo';

const Screen = createStackNavigator();

export default function NodeNavigator() {
    const token = useSelector((state:IStateRedux) => state.token);
    const [loading, isLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadingUser() {
            if (token) {
                isLoading(true);
                const user = await getUserOnline();
                if (user !== undefined)
                    dispatch({ type: 'USER_ONLINE', user, token});

                isLoading(false);
                return;
            }
            dispatch({ type: 'USER_OFFLINE' });
        }
        loadingUser();
    }, [])

    //if (loading) return <AppLoading/>

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