import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {StackNavigationProp} from '@react-navigation/stack';

export type ScreenProp = StackNavigationProp<StackNavigatorList> &
  BottomTabNavigationProp<BottomNavigatorList>;

export type StackNavigatorList = {
  Intro: undefined;
  Login: undefined;
  Register: undefined;
  PrivacyPolicy: undefined;
  BottomTab: undefined;
  ForgotPassword: {email: String};
  SendMail: undefined;
  NewPassword: {email: String};
  PendingRequests: undefined;
  ChangePassword: undefined;
  Game: undefined;
  EditAccount: undefined;
};

export type BottomNavigatorList = {
  Home: undefined;
  Friends: undefined;
  Scores: undefined;
  Profile: undefined;
};
