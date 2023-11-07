import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from '../../themes/icon';
import LinearGradient from 'react-native-linear-gradient';
import {NoDataCardProps} from './types';

const NoDataCard = ({
  image,
  description,
  buttonLabel,
  buttonAction,
}: NoDataCardProps) => {
  return (
    <View className="flex h-full justify-center items-center px-8">
      <Icon name={image} width={320} height={224} />
      <Text className="text-sm text-center font-poppinsRegular text-textPrimary mt-6 mb-4">
        {description}
      </Text>
      {buttonLabel && (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="rounded-xl"
          colors={['#5BB9CA', '#1D7483']}>
          <TouchableOpacity
            className="w-fit px-5 h-12 flex justify-center items-center"
            activeOpacity={0.9}
            onPress={() => buttonAction && buttonAction()}>
            <Text className="text-white text-base font-poppinsMedium shadow">
              {buttonLabel}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      )}
    </View>
  );
};

export default NoDataCard;
