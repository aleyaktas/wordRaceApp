import React from 'react';
import DefaultTemplate from '../../templates/DefaultTemplate';
import {TextInput, Image, View, TouchableOpacity, Text} from 'react-native';
import Icon from '../../themes/icon';
import LinearGradient from 'react-native-linear-gradient';

const ChangePassword = () => {
  return (
    <DefaultTemplate title="Change Password" backIcon>
      <Image
        className="w-[100px] h-[100px] rounded-full mx-auto mt-6 my-10"
        source={{
          uri: 'https://static.booksy.com/static/live/covers/make_up.jpg',
        }}
      />
      <View className="w-full px-5">
        <View className="flex-row justify-between items-center bg-white rounded-xl w-full h-12 px-3 mb-4">
          <TextInput
            className="flex-1"
            placeholder="Current Password"
            secureTextEntry
          />
          <Icon name="Lock" width={24} height={24} color="#BCBCBC" />
        </View>
        <View className="flex-row justify-between items-center bg-white rounded-xl w-full h-12 px-3">
          <TextInput
            className="flex-1"
            placeholder="New Password"
            secureTextEntry
          />
          <Icon name="Lock" width={24} height={24} color="#BCBCBC" />
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="w-full rounded-xl mt-6 mb-6"
          colors={['#5BB9CA', '#1D7483']}>
          <TouchableOpacity
            className="w-full h-12 flex justify-center items-center"
            activeOpacity={0.9}>
            <Text className="text-white text-base font-medium shadow">
              Save Changes
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </DefaultTemplate>
  );
};

export default ChangePassword;
