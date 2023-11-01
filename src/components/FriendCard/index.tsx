import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import Icon from '../../themes/icon';
import {FriendCardProps} from './types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../themes/colors';
import Image from '../Image';

const FriendCard = ({name, image, isOnline, deleteFriend}: FriendCardProps) => {
  return (
    <View className="bg-white rounded-xl flex-row justify-between items-center px-5 py-2">
      <View className="relative">
        <View className="w-[40px] h-[40px] rounded-full overflow-hidden">
          {image ? (
            <Image
              source={{uri: image}}
              style={{width: '100%', height: '100%'}}
            />
          ) : (
            <View className=" bg-gray-200 w-full h-full flex justify-center items-center">
              <Text className="text-black font-poppinsSemiBold">
                {name?.charAt(0)?.toUpperCase()}
              </Text>
            </View>
          )}
        </View>
        <View
          className={`w-3 h-3 rounded-full absolute bottom-0 right-0 ${
            isOnline ? 'bg-green-500' : 'bg-gray-300'
          }`}
        />
      </View>
      <Text className="text-sm text-gray-600 font-poppinsRegular">{name}</Text>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.button}
        onPress={() => deleteFriend && deleteFriend()}>
        <Icon name="Trash" width={24} height={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.iconBorder,
    borderRadius: 12,
    padding: 6,
  },
});

export default FriendCard;
