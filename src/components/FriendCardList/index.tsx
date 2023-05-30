import React from 'react';
import {FlatList, View} from 'react-native';
import FriendCard from '../FriendCard';
import {FriendCardListProps} from './types';

const FriendCardList = ({
  friends,
  onlineUsers,
  deleteFriend,
}: FriendCardListProps) => {
  return (
    <FlatList
      data={friends}
      renderItem={({item}) => (
        <FriendCard
          name={item.username}
          isOnline={
            (onlineUsers?.length > 0 &&
              onlineUsers.some(user => user.username === item.username)) ||
            false
          }
          image={item.profileImage}
          deleteFriend={() => deleteFriend(item.username)}
        />
      )}
      contentContainerStyle={{
        padding: 20,
        paddingBottom: 80,
      }}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
    />
  );
};

export default FriendCardList;
