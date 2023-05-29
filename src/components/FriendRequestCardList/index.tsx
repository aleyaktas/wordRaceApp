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
          name={item.username}
          image={item.profileImage}
          onAccept={(username: string) => onAccept(username)}
          onDecline={(username: string) => onDecline(username)}
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
