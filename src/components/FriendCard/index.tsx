import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import Icon from '../../themes/icon';
import {FriendCardProps} from './types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../themes/colors';

const FriendCard = ({name, image, isOnline, deleteFriend}: FriendCardProps) => {
  return (
    <View className="bg-white rounded-xl flex-row justify-between items-center px-5 py-2">
      <View className="relative">
        <View className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <Icon name={image} width={40} height={40} />
        </View>
        {isOnline && (
          <View
            className={`w-3 h-3 rounded-full absolute bottom-0 right-0 ${
              isOnline ? 'bg-green-500' : 'bg-gray-400'
            }`}
          />
        )}
      </View>
      <Text className="text-sm text-gray-600 ">{name}</Text>
      <TouchableOpacity
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
