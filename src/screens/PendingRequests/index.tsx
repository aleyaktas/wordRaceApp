import React, {useEffect, useState} from 'react';
import DefaultTemplate from '../../templates/DefaultTemplate';
import NoDataCard from '../../components/NoDataCard';
import FriendRequestCard from '../../components/FriendRequestCard';
import FriendRequestCardList from '../../components/FriendRequestCardList';

const PendingRequests = () => {
  const [pendingRequests, setPendingRequests] = useState<any>([]);

  useEffect(() => {
    setPendingRequests([
      {
        name: 'Test User',
        image: 'TestUser',
      },
      {
        name: 'Test User 2',
        image: 'Bird',
      },
    ]);
  }, []);

  return (
    <DefaultTemplate backIcon title="Pending Requests">
      {pendingRequests.length === 0 ? (
        <NoDataCard image="EmptyRequest" description="You have no request." />
      ) : (
        <FriendRequestCardList
          friends={pendingRequests}
          onAccept={() => {}}
          onDecline={() => {}}
        />
      )}
    </DefaultTemplate>
  );
};

export default PendingRequests;
