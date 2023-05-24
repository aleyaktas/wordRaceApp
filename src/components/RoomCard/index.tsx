import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import Icon from '../../themes/icon';
import {RoomCardProps} from './types';

const RoomCard = ({iconName, roomName}: RoomCardProps) => {
  return (
    <View
      style={styles.container}
      className="justify-center items-center bg-white rounded-xl overflow-hidden">
      <Icon className="mt-4" name={iconName} width={100} height={100} />
      <View className="flex justify-center items-center bg-roomCardFooter w-full h-11 mt-4">
        <Text className="text-white text-sm font-poppinsMedium">
          {roomName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width - 60) / 2,
  },
});

export default RoomCard;
