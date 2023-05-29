import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {StackNavigatorList} from './types';
import Login from '../screens/Login';
import Register from '../screens/Register';
import BottomTabNavigator, {StateProps} from './bottomTabNavigator';
import ForgotPassword from '../screens/ForgotPassword';
import NewPassword from '../screens/NewPassword';
import Intro from '../screens/Intro';
import PendingRequests from '../screens/PendingRequests';
import ChangePassword from '../screens/ChangePassword';
import Game from '../screens/Game';
import {useAppSelector} from '../store';

const stackNavigator = () => {
  const Stack = createStackNavigator<StackNavigatorList>();
  const {token} = useAppSelector((state: StateProps) => state.auth);

  const horizontalAnimation: StackNavigationOptions = {
    cardStyle: {backgroundColor: '#fff'},
    cardStyleInterpolator: ({current, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
    gestureEnabled: true,
    header: () => null,
  };

  return (
    <Stack.Navigator screenOptions={horizontalAnimation}>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="PendingRequests" component={PendingRequests} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>
  );
};

export default stackNavigator;
