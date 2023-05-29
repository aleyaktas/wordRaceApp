import React from 'react';
import {FlatList, View} from 'react-native';
import ChatCard from '../ChatCard';
import {ChatCardListProps} from './types';

const ChatCardList = ({data}: ChatCardListProps) => {
  const scrollRef = React.useRef<any>(null);
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <ChatCard image={item.image} isOwner={item.isOwner} msg={item.msg} />
      )}
      contentContainerStyle={{
        paddingTop: 0,
        padding: 20,
        paddingBottom: 60,
      }}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
      ref={scrollRef}
      onContentSizeChange={() => scrollRef.current.scrollToEnd()}
      onLayout={() => scrollRef.current.scrollToEnd()}
    />
  );
};

export default ChatCardList;
