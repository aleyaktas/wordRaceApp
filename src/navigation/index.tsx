import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StackNavigator from './stackNavigator';
import Toast from '../components/Toast';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from '../store';
import {Provider} from 'react-redux';
import axios from 'axios';

axios.defaults.baseURL = 'https://api-wordrace.aleynaaktas.me';

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
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default NavigationStack;
