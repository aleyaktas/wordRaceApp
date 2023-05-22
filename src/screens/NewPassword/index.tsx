import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from '../../themes/icon';
import LinearGradient from 'react-native-linear-gradient';

const NewPassword = () => {
  return (
    <View className="flex w-full h-full mt-24 items-center px-5">
      <Icon name="Logo" width={100} height={100} />
      <Text className="font-bold text-2xl text-gray-900 my-3">
        New Password
      </Text>
      <Text className="font-normal text-sm text-textSecondary px-10 text-center mb-6 mt-1">
        Please enter the information for change password
      </Text>
      <View className="flex flex-row justify-between items-center bg-textInput rounded-xl w-full h-12 px-3">
        <TextInput
          className="w-[90%]"
          placeholder="New Password"
          secureTextEntry
        />
        <Icon name="Lock" width={24} height={24} color="#BCBCBC" />
      </View>
      <View className="flex flex-row justify-between items-center bg-textInput rounded-xl w-full h-12 px-3 my-4">
        <TextInput
          className="w-[90%]"
          placeholder="Confirm New Password"
          secureTextEntry
        />
        <Icon name="Lock" width={24} height={24} color="#BCBCBC" />
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        className="w-full rounded-xl mt-6 mb-7"
        colors={['#5BB9CA', '#1D7483']}>
        <TouchableOpacity
          className="w-full h-12 flex justify-center items-center"
          activeOpacity={0.9}>
          <Text className="text-white text-base font-medium shadow">Login</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default NewPassword;
