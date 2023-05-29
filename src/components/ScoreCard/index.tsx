import React from 'react';
import {Image, Text} from 'react-native';
import {View} from 'react-native';
import {ScoreCardProps} from './types';

const ScoreCard = ({index, name, image, scores}: ScoreCardProps) => {
  return (
    <View className="bg-white rounded-xl flex-row justify-between items-center px-5 py-2">
      <View className="flex-row gap-2 items-center">
        <Text className="text-sm font-poppinsMedium text-gray-600 mr-3">
          {index}.
        </Text>
        <View className="w-[40px] h-[40px] rounded-full overflow-hidden">
          {image ? (
            <Image
              source={{uri: image}}
              style={{width: '100%', height: '100%'}}
            />
          ) : (
            <View className=" bg-gray-200 w-full h-full flex justify-center items-center">
              <Text className="text-black font-poppinsSemiBold">
                {name.charAt(0)?.toUpperCase()}
              </Text>
            </View>
          )}
        </View>
      </View>
      <Text className="text-sm text-gray-600 font-poppinsRegular">{name}</Text>
      <Text className="text-sm font-poppinsBold text-black ">{scores}p</Text>
    </View>
  );
};

export default ScoreCard;
