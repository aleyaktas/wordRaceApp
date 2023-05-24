import React from 'react';
import {Image, Text} from 'react-native';
import {View} from 'react-native';
import {ScoreCardProps} from './types';

const ScoreCard = ({index, name, image, scores}: ScoreCardProps) => {
  const imageUrl =
    'https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg';

  return (
    <View className="bg-white rounded-xl flex-row justify-between items-center px-5 py-2">
      <View className="flex-row gap-2 items-center">
        <Text className="text-sm font-poppinsBold text-gray-600">{index}</Text>
        <View className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <Image
            source={{uri: imageUrl}}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
      <Text className="text-sm text-gray-600 font-poppinsRegular">{name}</Text>
      <Text className="text-sm font-poppinsBold text-black ">{scores}p</Text>
    </View>
  );
};

export default ScoreCard;
