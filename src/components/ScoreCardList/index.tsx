import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ScoreCard from '../ScoreCard';
import Icon from '../../themes/icon';
import colors from '../../themes/colors';
import {ScoreProps} from './types';

const ScoreCardList = ({topScores}: {topScores: ScoreProps[]}) => {
  return (
    <FlatList
      data={topScores}
      renderItem={({item, index}) => (
        <ScoreCard
          index={index + 1}
          name={item.username}
          image={item.profileImage}
          scores={item.score}
        />
      )}
      contentContainerStyle={{
        padding: 20,
        paddingBottom: 60,
      }}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
      ListHeaderComponent={() => (
        <>
          <View
            style={styles.iconContainer}
            className="w-32 h-32 rounded-full bg-white mt-6 mb-5 mx-auto">
            <Icon className="m-auto" name="TopScores" width={90} height={90} />
          </View>
          <Text className="text-secondary text-base font-poppinsMedium mb-4 text-center">
            Top 10 Scores
          </Text>
        </>
      )}
    />
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.primary,
  },
});
export default ScoreCardList;
