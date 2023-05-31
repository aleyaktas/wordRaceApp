import React from 'react';
import {StyleSheet, View} from 'react-native';
import AnswerCard from '../AnswerCard';
import {AnswerCardListProps} from './types';

const AnswerCardList = ({answers, handleCheck}: AnswerCardListProps) => {
  return (
    <View style={styles.container}>
      <AnswerCard answer={answers.a} onClick={() => handleCheck('a')} />
      <AnswerCard answer={answers.b} onClick={() => handleCheck('b')} />
      <AnswerCard answer={answers.c} onClick={() => handleCheck('c')} />
      <AnswerCard answer={answers.d} onClick={() => handleCheck('d')} />
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
