import React from 'react';
import {FlatList, View} from 'react-native';
import RoomCard from '../RoomCard';

const RoomCardList = ({
  rooms,
  onRoomClick,
}: {
  rooms: any[];
  onRoomClick: (id: string) => void;
}) => {
  return (
    <FlatList
      data={rooms}
      renderItem={({item}) => (
        <RoomCard
          iconName={item.image}
          roomName={item.name}
          onRoomClick={() => onRoomClick(item.id)}
        />
      )}
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
