import React, {useEffect, useState} from 'react';
import DefaultTemplate from '../../templates/DefaultTemplate';
import {View} from 'react-native';
import ScoreCardList from '../../components/ScoreCardList';
import {useAppSelector} from '../../store';
import {StateProps} from '../../navigation/bottomTabNavigator';

const Scores = () => {
  const {topScores} = useAppSelector((state: StateProps) => state.auth);
  useEffect(() => {}, []);

  return (
    <DefaultTemplate title="Scores">
      <View className="flex">
        <ScoreCardList topScores={topScores} />
      </View>
    </DefaultTemplate>
  );
};

export default Scores;
