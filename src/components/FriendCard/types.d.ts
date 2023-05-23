export interface FriendCardProps {
  name: string;
  image: string;
  isOnline?: boolean;
  deleteFriend?: () => void;
}
