import React from 'react';
import {View, Text} from 'react-native';
import Icon from '../../themes/icon';
import {RoomCardProps} from './types';

const RoomCard = ({iconName, roomName}: RoomCardProps) => {
  return (
    <View className="flex justify-center items-center bg-white rounded-xl overflow-hidden">
      <Icon className="mt-4" name={iconName} width={100} height={100} />
      <View className="flex justify-center items-center bg-roomCardFooter w-full h-11 mt-4">
        <Text className="text-white text-sm font-medium">{roomName}</Text>
      </View>
    </View>
  );
};

export default RoomCard;
