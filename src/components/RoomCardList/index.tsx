import React from 'react';
import {FlatList, View} from 'react-native';
import RoomCard from '../RoomCard';

const RoomCardList = ({rooms}: {rooms: any[]}) => {
  return (
    <FlatList
      data={rooms}
      renderItem={({item}) => (
        <RoomCard iconName={item.iconName} roomName={item.roomName} />
      )}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={{
        padding: 20,
      }}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
      columnWrapperStyle={{gap: 20}}
    />
  );
};

export default RoomCardList;
