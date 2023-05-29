import React from 'react';
import {FlatList, View} from 'react-native';
import FriendCard from '../FriendCard';
import {FriendCardListProps} from './types';

const FriendCardList = ({friends, deleteFriend}: FriendCardListProps) => {
  console.log('friends', friends);
  return (
    <FlatList
      data={friends}
      renderItem={({item}) => (
        <FriendCard
          name={item.username}
          image={item.profileImage}
          // isOnline={item.isOnline}
          deleteFriend={() => deleteFriend && deleteFriend()}
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
