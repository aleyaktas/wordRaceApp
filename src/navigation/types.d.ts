import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';

export type ScreenProp = StackNavigationProp<StackNavigatorList> &
  BottomTabNavigationProp<BottomNavigatorList>;

export type StackNavigatorList = {
  Intro: undefined;
  Login: undefined;
  Register: undefined;
  BottomTab: {data: any};
  ForgotPassword: undefined;
  NewPassword: undefined;
};

export type BottomNavigatorList = {
  Home: undefined;
  Friends: undefined;
  Scores: undefined;
  Profile: undefined;
};
