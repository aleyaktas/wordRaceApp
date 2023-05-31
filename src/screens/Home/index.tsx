import React, {memo, useEffect, useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import HomePageTemplate from '../../templates/HomePageTemplate';
import NoDataCard from '../../components/NoDataCard';
import AwesomeAlert from 'react-native-awesome-alerts';
import Icon from '../../themes/icon';
import {TextInput} from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import LinearGradient from 'react-native-linear-gradient';
import RoomCardList from '../../components/RoomCardList';
import {handleCreateRoom} from './actions';
import {AppDispatch, useAppSelector} from '../../store';
import {useDispatch} from 'react-redux';
import socket from '../../utils/socket';
import {
  getRooms,
  getTopScores,
  getUser,
} from '../../store/features/auth/authSlice';
import {RoomProps} from './types';
import {StateProps} from '../../navigation/bottomTabNavigator';
import InvitationModal from '../../components/InvitationModal';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [rooms, setRooms] = useState<RoomProps[]>([]);
  const [filteredRooms, setFilteredRooms] = useState<RoomProps[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [roomName, setRoomName] = useState('');
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [room, setRoom] = useState<RoomProps>();
  const [selectedTimer, setSelectedTimer] = useState({
    label: '20sn',
    value: 20,
  });
  const [selectedRoomStatus, setSelectedRoomStatus] = useState({
    label: 'Public',
    value: true,
  });

  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  const {username, profileImage} = useAppSelector(
    (state: StateProps) => state?.auth.user,
  );

  useEffect(() => {
    dispatch(getUser());
    dispatch(getTopScores());
    socket.on('get_rooms', ({rooms}) => {
      setRooms(rooms);
      dispatch(getRooms(rooms));
    });
  }, [dispatch]);

  useEffect(() => {
    if (searchText?.length > 0) {
      const filteredRooms = rooms.filter(room =>
        room.name.toLowerCase().includes(searchText.toLowerCase()),
      );
      if (filteredRooms?.length > 0) {
        setFilteredRooms(filteredRooms);
      } else {
        setFilteredRooms([]);
      }
    }
  }, [searchText]);

  useEffect(() => {
    socket.on(`invited_${username}`, ({room}) => {
      console.log(room);
      InvitationModal.open({
        image: room.image,
        username: room.players[0].username,
        onConfirmPress: () => {},
        onCancelPress: () => {},
      });
      console.log(username);

      setIsOpen(true);
      setRoom(room);
    });
  }, []);

  const CustomComponent = memo(() => (
    <View className="flex flex-col justify-center items-center w-full">
      <Icon name="CreateRoom" width={100} height={100} />
      <Text className="text-base font-poppinsBold text-black my-3">
        Create Room
      </Text>
      <View className="bg-textInput rounded-xl h-12 px-3 w-full">
        <TextInput
          className="flex-1 font-poppinsLight"
          placeholder="Room Name"
          value={roomName}
          onChangeText={setRoomName}
        />
      </View>
      <View className="flex-row justify-between w-full gap-x-2">
        <View className="flex-1 text-black placeholder:text-black  bg-textInput rounded-xl h-12 mt-4">
          <RNPickerSelect
            onValueChange={value => setSelectedTimer(value)}
            items={[
              {label: '20sn', value: 20},
              {label: '15sn', value: 15},
              {label: '10sn', value: 10},
            ]}
            value={selectedTimer}
            placeholder={{}}
          />
        </View>
        <View className="flex-1 text-black placeholder:text-black  bg-textInput rounded-xl h-12 mt-4">
          <RNPickerSelect
            onValueChange={value => setSelectedRoomStatus(value)}
            items={[
              {label: 'Public', value: true},
              {label: 'Private', value: false},
            ]}
            value={selectedRoomStatus}
            placeholder={{}}
          />
        </View>
      </View>
      <View className="flex-row mt-6">
        <TouchableOpacity
          onPress={() => setShowAlert(false)}
          className="w-[48%] h-12 flex justify-center items-center"
          activeOpacity={0.9}>
          <Text className="text-black text-base font-poppinsMedium shadow">
            Cancel
          </Text>
        </TouchableOpacity>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="w-[48%] rounded-xl"
          colors={['#5BB9CA', '#1D7483']}>
          <TouchableOpacity
            onPress={async () =>
              await handleCreateRoom({
                roomName,
                rooms,
                username,
                profileImage,
                selectedTimer,
                selectedRoomStatus,
                setShowAlert,
                navigation,
              })
            }
            className="w-full h-12 flex justify-center items-center"
            activeOpacity={0.9}>
            <Text className="text-white text-base font-poppinsMedium shadow">
              Create
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  ));

  return (
    <HomePageTemplate setShowAlert={setShowAlert}>
      {rooms?.length === 0 && !searchText ? (
        <NoDataCard
          image="EmptyRoom"
          description="There are no online room. You can create room to play"
          buttonLabel="Create Room"
          buttonAction={() => setShowAlert(true)}
        />
      ) : (
        <View>
          <View className="flex-row justify-between items-center bg-white rounded-xl h-12 px-2 m-5 mb-0">
            <TextInput
              className="flex-1 px-3 text-black font-poppinsLight"
              placeholder="Search room..."
              value={searchText}
              onChangeText={setSearchText}
            />
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              className="w-10 h-10 flex justify-center items-center rounded-xl"
              colors={['#5BB9CA', '#1D7483']}>
              <Icon name="Search" width={24} height={24} color="white" />
            </LinearGradient>
          </View>
          <RoomCardList
            rooms={
              (filteredRooms?.length > 0 && searchText?.length > 0) ||
              (filteredRooms?.length === 0 && searchText?.length > 0)
                ? filteredRooms
                : rooms
            }
          />
          {filteredRooms?.length === 0 && searchText?.length > 0 && (
            <Text className="text-center text-black font-poppinsMedium text-xl mt-5">
              There is no room with this name
            </Text>
          )}
        </View>
      )}
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        customView={<CustomComponent />}
        contentContainerStyle={{
          width: Dimensions.get('window').width - 50,
          borderRadius: 12,
        }}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        onCancelPressed={() => {
          setShowAlert(false);
        }}
        onConfirmPressed={() => {
          setShowAlert(false);
        }}
        onDismiss={() => {
          setShowAlert(false);
        }}
      />
    </HomePageTemplate>
  );
};

export default Home;
