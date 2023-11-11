import React, {useEffect, useState} from 'react';
import DefaultTemplate from '../../templates/DefaultTemplate';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import NoDataCard from '../../components/NoDataCard';
import AwesomeAlert from 'react-native-awesome-alerts';
import {TextInput} from 'react-native-gesture-handler';
import Icon from '../../themes/icon';
import LinearGradient from 'react-native-linear-gradient';
import FriendCardList from '../../components/FriendCardList';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../../navigation/types';
import {useAppDispatch, useAppSelector} from '../../store';
import {StateProps} from '../../navigation/bottomTabNavigator';
import {
  addFriend,
  deleteFriend,
  getFriends,
} from '../../store/features/auth/authSlice';
import socket from '../../utils/socket';

const Friends = () => {
  const [showAddFriendModal, setShowAddFriendModal] = useState(false);
  const [showDeleteFriendModal, setShowDeleteFriendModal] = useState(false);
  const [deleteUsername, setDeleteUsername] = useState<string>('');
  const [addUsername, setAddUsername] = useState<string>('');
  const navigation = useNavigation<ScreenProp>();
  const dispatch = useAppDispatch();
  const token = useAppSelector((state: StateProps) => state.auth.token);
  const {friends, pendingRequests} = useAppSelector(
    (state: StateProps) => state.auth.user,
  );
  const ownerUsername = useAppSelector(
    (state: StateProps) => state.auth.user.username,
  );
  const onlineUsers = useAppSelector((state: StateProps) =>
    state.auth.onlineUsers.filter(user => user.username !== ownerUsername),
  );

  useEffect(() => {
    socket.on('incoming_request', ({username}) => {
      if (username === ownerUsername) {
        dispatch(getFriends());
      }
    });

    socket.on('accepted_request', ({username}) => {
      if (username === ownerUsername) {
        dispatch(getFriends());
      }
    });

    socket.on('deleted_friend', ({username}) => {
      if (username === ownerUsername) {
        dispatch(getFriends());
      }
    });
  }, [dispatch]);

  const CustomAddComponent = () => (
    <View className="flex flex-col justify-center items-center w-full">
      <Icon name="AddFriend" width={100} height={100} />
      <Text className="text-base font-poppinsBold text-textPrimary my-3">
        Add Friend
      </Text>
      <View className="bg-textInput rounded-xl h-12 px-3 w-full">
        <TextInput
          className="w-full font-poppinsLight text-textPrimary"
          placeholder="Friend username"
          placeholderTextColor={'gray'}
          value={addUsername}
          onChangeText={setAddUsername}
        />
      </View>
      <View className="flex-row mt-6">
        <TouchableOpacity
          onPress={() => setShowAddFriendModal(false)}
          className="w-[48%] h-12 flex justify-center items-center"
          activeOpacity={0.9}>
          <Text className="text-textPrimary text-base font-poppinsMedium shadow">
            Cancel
          </Text>
        </TouchableOpacity>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="w-[48%] rounded-xl"
          colors={['#5BB9CA', '#1D7483']}>
          <TouchableOpacity
            onPress={async () => {
              if (!token) {
                setShowAddFriendModal(false);
                return navigation.navigate('Login');
              }
              const res: any = await dispatch(
                addFriend({username: addUsername}),
              );
              if (!res.error) {
                await dispatch(getFriends());
                socket.emit('friend_request', {username: addUsername});
              }
              setShowAddFriendModal(false);
            }}
            className="w-full h-12 flex justify-center items-center"
            activeOpacity={0.9}>
            <Text className="text-white text-base font-poppinsMedium shadow">
              Add
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );

  const CustomDeleteComponent = () => (
    <View className="flex flex-col justify-center items-center w-full">
      <Icon name="DeleteFriend" width={100} height={100} />
      <Text className="text-base font-poppinsBold text-textPrimary my-3">
        Delete Your Friend
      </Text>
      <Text className="text-center font-poppinsRegular text-textPrimary">
        Do you want to delete your friend? You can then send a friend request
        again
      </Text>
      <View className="flex-row mt-6">
        <TouchableOpacity
          onPress={() => setShowDeleteFriendModal(false)}
          className="w-[48%] h-12 flex justify-center items-center"
          activeOpacity={0.9}>
          <Text className="text-textPrimary text-base font-poppinsMedium shadow">
            Cancel
          </Text>
        </TouchableOpacity>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="w-[48%] rounded-xl"
          colors={['#5BB9CA', '#1D7483']}>
          <TouchableOpacity
            onPress={async () => {
              const res: any = await dispatch(
                deleteFriend({username: deleteUsername}),
              );
              if (!res.error) {
                await dispatch(getFriends());
                socket.emit('friend_delete', {username: deleteUsername});
              }
              setShowDeleteFriendModal(false);
            }}
            className="w-full h-12 flex justify-center items-center"
            activeOpacity={0.9}>
            <Text className="text-white text-base font-poppinsMedium shadow">
              Delete
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );

  return (
    <DefaultTemplate
      rightIconName="Add"
      leftIconName="Friends"
      pendingRequestLength={pendingRequests?.length}
      title="Friends"
      leftIconAction={() => navigation.navigate('PendingRequests')}
      rightIconAction={() => setShowAddFriendModal(true)}>
      {friends?.length === 0 ? (
        <NoDataCard
          image="EmptyFriend"
          description="You have no friends yet. Would you like to add friends?"
          buttonLabel="Add Friend"
          buttonAction={() => setShowAddFriendModal(true)}
        />
      ) : (
        <FriendCardList
          onlineUsers={onlineUsers}
          friends={friends}
          deleteFriend={username => {
            setShowDeleteFriendModal(true);
            setDeleteUsername(username);
          }}
        />
      )}
      <AwesomeAlert
        show={showAddFriendModal}
        showProgress={false}
        customView={<CustomAddComponent />}
        contentContainerStyle={{
          width: Dimensions.get('window').width - 50,
          borderRadius: 12,
        }}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        onCancelPressed={() => {
          setShowAddFriendModal(false);
        }}
        onConfirmPressed={() => {
          setShowAddFriendModal(false);
        }}
        onDismiss={() => {
          setShowAddFriendModal(false);
        }}
      />
      <AwesomeAlert
        show={showDeleteFriendModal}
        showProgress={false}
        customView={<CustomDeleteComponent />}
        contentContainerStyle={{
          width: Dimensions.get('window').width - 50,
          borderRadius: 12,
        }}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        onCancelPressed={() => {
          setShowDeleteFriendModal(false);
        }}
        onConfirmPressed={() => {
          setShowDeleteFriendModal(false);
        }}
        onDismiss={() => {
          setShowDeleteFriendModal(false);
        }}
      />
    </DefaultTemplate>
  );
};

export default Friends;
