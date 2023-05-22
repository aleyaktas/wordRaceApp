import React from 'react';
import {View} from 'react-native';
import {StepCounterProps} from './types';

const StepCounter = ({step, totalStep}: StepCounterProps) => {
  return (
    <View className="flex flex-row gap-2 justify-center items-center">
      {Array(totalStep)
        .fill(0)
        .map((_, index) => (
          <View
            key={index}
            className={`w-[10px] h-[10px] rounded-full ${
              index + 1 === step ? 'bg-darkGreen w-6' : 'bg-gray-300'
            }`}
          />
        ))}
    </View>
  );
};

export default StepCounter;
