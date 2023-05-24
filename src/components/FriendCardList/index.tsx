import React from 'react';
import {FlatList, Text, View} from 'react-native';
import FriendCard from '../FriendCard';

const FriendCardList = ({
  friends,
  deleteFriend,
}: {
  friends: any[];
  deleteFriend: () => void;
}) => {
  return (
    <FlatList
      data={friends}
      renderItem={({item}) => (
        <FriendCard
          name={item.name}
          image={item.image}
          isOnline={item.isOnline}
          deleteFriend={() => deleteFriend()}
        />
      )}
      keyExtractor={item => item.id}
      contentContainerStyle={{
        padding: 20,
        paddingBottom: 60,
      }}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
    />
  );
};

export default FriendCardList;
