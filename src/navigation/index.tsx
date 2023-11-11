import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StackNavigator from './stackNavigator';
import Toast from '../components/Toast';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from '../store';
import {Provider} from 'react-redux';
import axios from 'axios';
import AlertBox from '../components/InvitationModal';

axios.defaults.baseURL = 'https://api-wordrace.aleynaaktas.com';
// axios.defaults.baseURL = 'http://192.168.1.100:5001';
const NavigationStack = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <GestureHandlerRootView style={{flex: 1}}>
              <SafeAreaProvider>
                <StackNavigator />
              </SafeAreaProvider>
            </GestureHandlerRootView>
            <Toast />
            <AlertBox />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default NavigationStack;
