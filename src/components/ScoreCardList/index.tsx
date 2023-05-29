import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ScoreCard from '../ScoreCard';
import Icon from '../../themes/icon';
import colors from '../../themes/colors';

const ScoreCardList = ({topScores}: {topScores: any[]}) => {
  return (
    <FlatList
      data={topScores}
      renderItem={({item, index}) => (
        <ScoreCard
          index={index + 1}
          name={item.name}
          image={item.image}
          scores={item.scores}
        />
      )}
      contentContainerStyle={{
        padding: 20,
        paddingBottom: 60,
      }}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
      ListHeaderComponent={() => (
        <View
          style={styles.iconContainer}
          className="w-32 h-32 rounded-full bg-white mt-6 mb-10 mx-auto">
          <Icon className="m-auto" name="TopScores" width={90} height={90} />
        </View>
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
