export interface FriendRequestCardListProps {
  friends: any[];
  onAccept: (username: string) => void;
  onDecline: (username: string) => void;
}
