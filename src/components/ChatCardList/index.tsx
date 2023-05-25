import React from 'react';
import {FlatList, View} from 'react-native';
import ChatCard from '../ChatCard';
import {ChatCardListProps} from './types';

const ChatCardList = ({data}: ChatCardListProps) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <ChatCard image={item.image} isOwner={item.isOwner} />
      )}
      contentContainerStyle={{
        paddingTop: 0,
        padding: 20,
        paddingBottom: 60,
      }}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
      keyExtractor={item => item.id}
    />
  );
};

export default ChatCardList;
