import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {StackNavigatorList} from './types';
import Login from '../screens/Login';
import Register from '../screens/Register';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import BottomTabNavigator, {StateProps} from './bottomTabNavigator';
import ForgotPassword from '../screens/ForgotPassword';
import NewPassword from '../screens/NewPassword';
import Intro from '../screens/Intro';
import PendingRequests from '../screens/PendingRequests';
import ChangePassword from '../screens/ChangePassword';
import Game from '../screens/Game';
import {useAppSelector} from '../store';
import SendMail from '../screens/SendMail';
import EditAccount from '../screens/EditAccount';

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
    gestureEnabled: false,
    header: () => null,
  };

  return (
    <Stack.Navigator screenOptions={horizontalAnimation}>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SendMail" component={SendMail} />
      <Stack.Screen name="NewPassword" component={NewPassword} />
      <Stack.Screen name="PendingRequests" component={PendingRequests} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="EditAccount" component={EditAccount} />
    </Stack.Navigator>
  );
};

export default stackNavigator;
