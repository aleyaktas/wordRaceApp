import React from 'react';
import {Image, Text} from 'react-native';
import {View} from 'react-native';
import {InviteFriendCardProps} from './types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const InviteFriendCard = ({name, image}: InviteFriendCardProps) => {
  const imageUrl =
    'https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg';

  return (
    <View className="bg-white rounded-xl flex-row justify-between items-center px-5 py-2 border border-gray-400">
      <View className="relative">
        <View className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <Image
            source={{uri: imageUrl}}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
      <Text className="text-sm text-gray-600 font-poppinsRegular">{name}</Text>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        className="rounded-lg"
        colors={['#5BB9CA', '#1D7483']}>
        <TouchableOpacity
          className="w-fit px-3 h-8 flex justify-center items-center"
          activeOpacity={0.9}>
          <Text className="text-white text-base font-poppinsMedium shadow">
            Invite
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default InviteFriendCard;
