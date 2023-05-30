import React, {useEffect, useState} from 'react';
import DefaultTemplate from '../../templates/DefaultTemplate';
import NoDataCard from '../../components/NoDataCard';
import FriendRequestCard from '../../components/FriendRequestCard';
import FriendRequestCardList from '../../components/FriendRequestCardList';
import {useAppDispatch, useAppSelector} from '../../store';
import {StateProps} from '../../navigation/bottomTabNavigator';
import {
  acceptFriend,
  getFriends,
  rejectFriend,
} from '../../store/features/auth/authSlice';
import socket from '../../utils/socket';

const PendingRequests = () => {
  const {pendingRequests} = useAppSelector(
    (state: StateProps) => state.auth.user,
  );
  const dispatch = useAppDispatch();

  const onClickAccept = async (username: string) => {
    await dispatch(acceptFriend({username}));
    socket.emit('friend_accept', {username});
    await dispatch(getFriends());
  };

  const onClickReject = async (username: string) => {
    await dispatch(rejectFriend({username}));
    dispatch(getFriends());
  };

  return (
    <DefaultTemplate backIcon title="Pending Requests">
      {pendingRequests?.length === 0 ? (
        <NoDataCard image="EmptyRequest" description="You have no request." />
      ) : (
        <FriendRequestCardList
          friends={pendingRequests}
          onAccept={(name: string) => {
            onClickAccept(name);
          }}
          onDecline={(name: string) => {
            onClickReject(name);
          }}
        />
      )}
    </DefaultTemplate>
  );
};

export default PendingRequests;
