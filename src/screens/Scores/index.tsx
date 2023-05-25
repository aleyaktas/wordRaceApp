import React, {useEffect, useState} from 'react';
import DefaultTemplate from '../../templates/DefaultTemplate';
import {View} from 'react-native';
import ScoreCardList from '../../components/ScoreCardList';

const Scores = () => {
  const [topScores, setTopScores] = useState<any>();
  useEffect(() => {
    setTopScores([
      {
        name: 'Test User',
        image: 'TestUser',
        scores: 100,
      },
      {
        name: 'Test User 2',
        image: 'Bird',
        scores: 200,
      },
    ]);
  }, []);

  return (
    <DefaultTemplate title="Scores">
      <View className="flex">
        <ScoreCardList topScores={topScores} />
      </View>
    </DefaultTemplate>
  );
};

export default Scores;
