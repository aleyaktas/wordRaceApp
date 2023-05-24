import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from '../../themes/icon';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../../navigation/types';

const Login = () => {
  const navigation = useNavigation<ScreenProp>();
  return (
    <View className="flex w-full h-full mt-24 items-center px-5">
      <Icon name="Logo" width={100} height={100} />
      <Text className="font-poppinsBold text-2xl text-gray-900 my-3">
        Welcome
      </Text>
      <Text className="font-poppinsRegular text-sm text-textSecondary px-10 text-center mb-6 mt-1">
        Please enter the information below to login Word Race App
      </Text>
      <View className="flex-row justify-between items-center bg-textInput rounded-xl w-full h-12 px-3">
        <TextInput
          className="flex-1 font-poppinsLight"
          placeholder="Your Username"
        />
        <Icon name="User" width={24} height={24} color="#BCBCBC" />
      </View>
      <View className="flex-row justify-between items-center bg-textInput rounded-xl w-full h-12 px-3 my-4">
        <TextInput
          className="flex-1 font-poppinsLight"
          placeholder="Your Password"
          secureTextEntry
        />
        <Icon name="Lock" width={24} height={24} color="#BCBCBC" />
      </View>
      <TouchableOpacity
        className="w-fit mr-auto"
        activeOpacity={0.9}
        onPress={() => navigation.navigate('ForgotPassword')}>
        <Text className="text-darkGreen font-poppinsRegular text-sm underline underline-offset-6">
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        className="w-full rounded-xl mt-6 mb-7"
        colors={['#5BB9CA', '#1D7483']}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BottomTab')}
          className="w-full h-12 flex justify-center items-center"
          activeOpacity={0.9}>
          <Text className="text-white text-base font-poppinsMedium shadow">
            Login
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <View className="flex-row gap-1">
        <Text className="text-gray-900 text-sm font-poppinsMedium">
          Don’t have an account?
        </Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Register')}>
          <Text className="text-darkGreen text-sm font-poppinsBold">
            Create New Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
