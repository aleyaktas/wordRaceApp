import React from 'react';
import {StyleSheet, View} from 'react-native';
import AnswerCard from '../AnswerCard';
import {AnswerCardListProps} from './types';

const AnswerCardList = ({answers}: AnswerCardListProps) => {
  return (
    <View style={styles.container}>
      {answers.map((answer, index) => (
        <AnswerCard key={index} answer={answer} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    rowGap: 16,
    columnGap: 16,
  },
});

export default AnswerCardList;
