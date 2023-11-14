import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from '../../themes/icon';
import StepCounter from '../StepCounter';
import LinearGradient from 'react-native-linear-gradient';
import {IntroStepProps} from './types';

const IntroStep = ({
  step,
  title,
  description,
  image,
  buttonLabel,
  buttonAction,
}: IntroStepProps) => {
  return (
    <View className="flex flex-1 w-full items-center justify-center h-full p-5">
      <Icon name={image} width={300} height={260} />
      <Text className="font-poppinsBold text-2xl text-textPrimary mt-16">
        {title}
      </Text>
      <Text className="font-poppinsRegular text-sm text-textSecondary px-3 text-center mb-12 mt-3">
        {description}
      </Text>
      <StepCounter step={step} totalStep={3} />
      <View className="absolute bottom-5 w-full">
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="w-full rounded-xl"
          colors={['#5BB9CA', '#1D7483']}>
          <TouchableOpacity
            className="w-full h-12 flex justify-center items-center"
            activeOpacity={0.9}
            onPress={buttonAction}>
            <Text className="text-white font-poppinsRegular text-base font-medium shadow">
              {buttonLabel}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default IntroStep;
