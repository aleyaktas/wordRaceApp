import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';
import colors from '../themes/colors';
import {BottomNavigatorList, ScreenProp} from './types';
import Intro from '../screens/Intro';
import Icon from '../themes/icon';

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
        name={icon}
        width={focused ? 26 : 22}
        height={focused ? 26 : 22}
        color={focused ? 'blue' : colors.primary}
      />
      {focused && (
        <View
          style={{
            position: 'absolute',
            bottom: -20,
            height: 2,
            width: '50%',
            backgroundColor: colors.white,
          }}
        />
      )}
    </View>
  );

  return (
    <BottomTab.Navigator
      screenOptions={{
        header: () => null,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.white,
        tabBarLabelStyle: {fontSize: 13},
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: colors.white,
          backgroundColor: colors.primary,
          position: 'absolute',
          height: 63 + insets.bottom,
          shadowColor: colors.text,
          shadowRadius: 10,
          shadowOpacity: 0.15,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          shadowOffset: {width: 0, height: 0},
          elevation: 10,
        },
        tabBarItemStyle: {paddingVertical: 9},
      }}>
      <BottomTab.Screen
        name="Home"
        component={Intro}
        options={{
          tabBarLabel: 'Ana sayfa',
          tabBarLabelStyle: {
            fontFamily: 'Poppins-Medium',
            fontWeight: '500',
          },
          tabBarIcon: ({focused}) => renderIcon({focused, icon: 'Home'}),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
