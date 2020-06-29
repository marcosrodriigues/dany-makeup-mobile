import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux' 

// import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto'
// import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu'

import Routes from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';

import store from './src/store';

export default function App() {
  // let [fontsLoader] = useFonts({
  //   Roboto_400Regular,
  //   Roboto_500Medium,
  //   Ubuntu_700Bold
  // })

  // if (!fontsLoader) {
  //   return <AppLoading />
  // }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Provider store={store}  >
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Provider>
      
    </>
    
  );
}

