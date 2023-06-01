import React from 'react';
import {Image, Text, View} from 'react-native';
import {ChatCardProps} from './types';

const ChatCard = ({image, isOwner, msg, username}: ChatCardProps) => {
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
          {image ? (
            <Image
              source={{uri: image}}
              style={{width: '100%', height: '100%'}}
            />
          ) : (
            <View className=" bg-gray-200 w-full h-full flex justify-center items-center">
              <Text className="text-black font-poppinsSemiBold">
                {username?.charAt(0)?.toUpperCase()}
              </Text>
            </View>
          )}
        </View>
        <Text
          style={{
            fontFamily: 'poppinsMedium',
            color: 'black',
            maxWidth: '80%',
          }}>
          {msg}
        </Text>
      </View>
    </View>
  );
};

export default ChatCard;
