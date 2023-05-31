import {showMessage} from '../../utils/showMessage';
import uuid from 'react-native-uuid';
import socket from '../../utils/socket';
import {RoomProps} from './types';

export const handleCreateRoom = ({
  roomName,
  rooms,
  username,
  profileImage,
  selectedTimer,
  selectedRoomStatus,
  setShowAlert,
  navigation,
}: {
  roomName: string;
  rooms: RoomProps[];
  username: string;
  profileImage: string;
  selectedTimer: {
    label: string;
    value: number;
  };
  selectedRoomStatus: {
    label: string;
    value: boolean;
  };
  setShowAlert: (value: boolean) => void;
  navigation: any;
}) => {
  const roomId = uuid.v4();
  if (roomName?.length === 0) {
    return showMessage('Room name cannot be empty', 'error');
  } else if (roomName?.length <= 3) {
    return showMessage('Room name must be at least 4 characters', 'error');
  } else if (rooms.find(room => room.name === roomName)) {
    return showMessage('Room name already exists', 'error');
  } else if (roomName?.length > 3) {
    socket.emit('create_room', {
      user: {
        username,
        image: profileImage,
      },
      roomName,
      roomId,
      timer: selectedTimer.value,
      isPublic: selectedRoomStatus.value,
    });
    navigation.navigate('Game');
    setShowAlert(false);
  }
};
