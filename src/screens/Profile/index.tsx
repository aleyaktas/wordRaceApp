import React from 'react';
import DefaultTemplate from '../../templates/DefaultTemplate';
import {TextInput, Image, View, TouchableOpacity, Text} from 'react-native';
import Icon from '../../themes/icon';
import LinearGradient from 'react-native-linear-gradient';

const Profile = () => {
  return (
    <DefaultTemplate title="Profile">
      <View className="justify-center items-center">
        <View className="my-6">
          <Image
            className="w-[100px] h-[100px] rounded-full "
            source={{
              uri: 'https://static.booksy.com/static/live/covers/make_up.jpg',
            }}
          />
          <TouchableOpacity
            onPress={() => null}
            className="bg-white w-9 h-9 rounded-full absolute bottom-0 right-0"
            activeOpacity={0.9}>
            <Icon
              className="m-auto"
              name="Upload"
              color="black"
              height="24"
              width="24"
            />
          </TouchableOpacity>
        </View>
        <Text className="text-base font-medium text-gray-800 mb-4">
          Your Score : <Text className="text-darkGreen font-bold">100p</Text>
        </Text>
      </View>
      <View className="w-full px-5">
        <View className="flex-row justify-between items-center bg-white rounded-xl w-full h-12 px-3 mb-4">
          <TextInput className="flex-1" placeholder="Test User" />
          <Icon name="User" width={24} height={24} color="#BCBCBC" />
        </View>
        <View className="flex-row justify-between items-center bg-white rounded-xl w-full h-12 px-3">
          <TextInput className="flex-1" placeholder="test@gmail.com" />
          <Icon name="Mail" width={24} height={24} color="#BCBCBC" />
        </View>
        <Text className="text-sm text-darkGreen underline mt-7">
          Change Your Password
        </Text>
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

export default Profile;
