import React from 'react';
import {FlatList, View} from 'react-native';
import InviteFriendCard from '../InviteFriendCard';
import {InviteFriendCardProps} from './types';

const InviteFriendCardList = ({friends}: InviteFriendCardProps) => {
  return (
    <FlatList
      data={friends}
      renderItem={({item}) => (
        <InviteFriendCard name={item.name} image={item.image} />
      )}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <View style={{height: 12}} />}
    />
  );
};

export default InviteFriendCardList;
