import React from 'react';
import {FlatList, View} from 'react-native';
import FriendRequestCard from '../FriendRequestCard';
import {FriendRequestCardListProps} from './types';

const FriendRequestCardList = ({
  friends,
  onAccept,
  onDecline,
}: FriendRequestCardListProps) => {
  return (
    <FlatList
      data={friends}
      renderItem={({item}) => (
        <FriendRequestCard
          name={item.name}
          image={item.image}
          onAccept={() => onAccept()}
          onDecline={() => onDecline()}
        />
      )}
      contentContainerStyle={{
        padding: 20,
      }}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
    />
  );
};

export default FriendRequestCardList;
