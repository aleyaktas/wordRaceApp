import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';
import colors from '../themes/colors';
import {BottomNavigatorList, ScreenProp} from './types';
import Icon from '../themes/icon';
import Home from '../screens/Home';
import Friends from '../screens/Friends';
import Scores from '../screens/Scores';
import Profile from '../screens/Profile';
import socketIO from 'socket.io-client';
import {useSelector} from 'react-redux';
import {useAppDispatch, useAppSelector} from '../store';
import {InitialStateProps} from '../store/features/auth/types';
import {getOnlineUsers} from '../store/features/auth/authSlice';

interface StateProps {
  auth: InitialStateProps;
}

const BottomTabNavigator = ({}: {navigation: ScreenProp; route: any}) => {
  const BottomTab = createBottomTabNavigator<BottomNavigatorList>();
  const insets = useSafeAreaInsets();

  const renderIcon = ({focused, icon}: {focused: boolean; icon: string}) => (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Icon
        name={focused ? `${icon}Active` : icon}
        width={26}
        height={26}
        color={colors.text}
      />
    </View>
  );

  const findUsername = useAppSelector((state: StateProps) => state.auth.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (findUsername !== undefined) {
      const socket = socketIO('https://api-wordrace.aleynaaktas.me', {
        query: {
          username: findUsername,
        },
      });
      socket.emit('user_status', {findUsername});
      socket.on('online_users', ({users}) => {
        dispatch(getOnlineUsers({users}));
      });
      socket.on(`invited_${findUsername}`, ({room}) => {
        console.log(room);
        // setIsOpen(true);
        // setRoom(room);
      });
    }
  }, [findUsername]);

  return (
    <BottomTab.Navigator
      screenOptions={{
        header: () => null,
        tabBarLabelStyle: {fontSize: 13},
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: colors.white,
          backgroundColor: colors.white,
          position: 'absolute',
          height: 63 + insets.bottom,
          shadowColor: 'black',
          shadowRadius: 10,
          shadowOpacity: 0.15,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          shadowOffset: {width: 0, height: 0},
          elevation: 10,
        },
        tabBarItemStyle: {paddingVertical: 9},
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({focused}) => renderIcon({focused, icon: 'Home'}),
        }}
      />
      <BottomTab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarLabel: 'Friends',
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({focused}) => renderIcon({focused, icon: 'Friends'}),
        }}
      />
      <BottomTab.Screen
        name="Scores"
        component={Scores}
        options={{
          tabBarLabel: 'Scores',
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({focused}) => renderIcon({focused, icon: 'Scores'}),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: colors.primary,
          tabBarIcon: ({focused}) => renderIcon({focused, icon: 'Profile'}),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
