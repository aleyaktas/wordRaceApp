import React from 'react';
import {FlatList, View} from 'react-native';
import ChatCard from '../ChatCard';
import {ChatCardListProps} from './types';

const ChatCardList = ({messages, username}: ChatCardListProps) => {
  const scrollRef = React.useRef<any>(null);
  return (
    <FlatList
      className="mb-16"
      data={messages}
      renderItem={({item}) => (
        <ChatCard
          image={item.img}
          isOwner={item.username === username ? true : false}
          msg={item.msg}
          username={item.username}
        />
      )}
      contentContainerStyle={{
        paddingTop: 0,
        padding: 20,
      }}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
      ref={scrollRef}
      onContentSizeChange={() => scrollRef.current.scrollToEnd()}
      onLayout={() => scrollRef.current.scrollToEnd()}
    />
  );
};

export default ChatCardList;
