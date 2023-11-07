import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {InviteFriendCardProps} from './types';
import LinearGradient from 'react-native-linear-gradient';
import Image from '../Image';

const InviteFriendCard = ({
  name,
  image,
  onClickInvite,
}: InviteFriendCardProps) => {
  return (
    <View className="bg-white rounded-xl flex-row justify-between items-center px-5 py-2 border border-gray-300">
      <View className="w-[40px] h-[40px] rounded-full overflow-hidden">
        {image ? (
          <Image
            source={{uri: image}}
            style={{width: '100%', height: '100%'}}
          />
        ) : (
          <View className=" bg-gray-200 w-full h-full flex justify-center items-center">
            <Text className="text-textPrimary font-poppinsSemiBold">
              {name?.charAt(0)?.toUpperCase()}
            </Text>
          </View>
        )}
      </View>
      <Text className="text-sm text-gray-600 font-poppinsRegular">{name}</Text>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        className="rounded-lg"
        colors={['#5BB9CA', '#1D7483']}>
        <TouchableOpacity
          className="w-fit px-3 h-8 flex justify-center items-center"
          onPress={() => onClickInvite(name)}
          activeOpacity={0.9}>
          <Text className="text-white text-base font-poppinsMedium">
            Invite
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default InviteFriendCard;
