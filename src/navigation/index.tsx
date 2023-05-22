import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StackNavigator from './stackNavigator';
import Toast from '../components/Toast';

const NavigationStack = () => {
  return (
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
  );
};

export default NavigationStack;
