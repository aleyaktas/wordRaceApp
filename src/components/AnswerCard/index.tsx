import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {AnswerCardProps} from './types';

const AnswerCard = ({answer, onClick}: AnswerCardProps) => {
  return (
    <TouchableOpacity
      className="w-[46%] h-20 !bg-answerCard rounded-xl"
      activeOpacity={0.9}
      onPress={() => onClick()}>
      <Text className="m-auto text-center text-black font-poppinsMedium">
        {answer}
      </Text>
    </TouchableOpacity>
  );
};

export default AnswerCard;
