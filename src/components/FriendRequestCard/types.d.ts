export interface FriendRequestCardProps {
  name: string;
  image: string;
  onAccept: (name: string) => void;
  onDecline: (name: string) => void;
}
