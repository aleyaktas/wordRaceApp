import React from 'react';
import {Image, Text, View} from 'react-native';
import {ChatCardProps} from './types';

const ChatCard = ({image, isOwner, msg}: ChatCardProps) => {
  const imageUrl = 'https://static.booksy.com/static/live/covers/make_up.jpg';

  return (
    <View
      style={{
        alignSelf: isOwner ? 'flex-end' : 'flex-start',
        maxWidth: '80%',
        width: 'auto',
      }}>
      <View
        style={{
          flexDirection: isOwner ? 'row-reverse' : 'row',
          alignItems: 'center',
          borderRadius: 8,
          padding: 10,
          backgroundColor: 'white',
          minHeight: 12,
          display: 'flex',
          gap: 10,
        }}>
        <View
          style={{width: 40, height: 40, borderRadius: 20, overflow: 'hidden'}}>
          <Image
            source={{uri: imageUrl}}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <Text style={{fontFamily: 'poppinsMedium', color: 'black'}}>{msg}</Text>
      </View>
    </View>
  );
};

export default ChatCard;
