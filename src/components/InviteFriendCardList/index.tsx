import React from 'react';
import {FlatList, View, Text} from 'react-native';
import InviteFriendCard from '../InviteFriendCard';
import {InviteFriendCardProps} from './types';
import Icon from '../../themes/icon';

const InviteFriendCardList = ({friends}: InviteFriendCardProps) => {
  return (
    <FlatList
      data={friends}
      renderItem={({item}) => (
        <InviteFriendCard name={item.name} image={item.image} />
      )}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <View style={{height: 12}} />}
      ListHeaderComponent={() => (
        <>
          <Icon
            name="InviteFriend2"
            width={100}
            height={100}
            className="mx-auto"
          />
          <Text className="text-base font-poppinsBold text-black my-3 text-center">
            Invite Your Friend
          </Text>
        </>
      )}
    />
  );
};

export default InviteFriendCardList;
