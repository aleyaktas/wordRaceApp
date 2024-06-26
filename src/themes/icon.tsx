import React from 'react';
import {SvgProps, SvgXml, LinearGradient} from 'react-native-svg';
import User from '../assets/icons/User.svg';
import Mail from '../assets/icons/Mail.svg';
import Lock from '../assets/icons/Lock.svg';
import AddFriend from '../assets/icons/AddFriend.svg';
import DeleteFriend from '../assets/icons/DeleteFriend.svg';
import EmptyFriend from '../assets/icons/EmptyFriend.svg';
import Game from '../assets/icons/Game.svg';
import DoubleChanceJoker from '../assets/icons/DoubleChanceJoker.svg';
import FiftyFiftyJoker from '../assets/icons/FiftyFiftyJoker.svg';
import InviteFriend from '../assets/icons/InviteFriend.svg';
import Send from '../assets/icons/Send.svg';
import Vs from '../assets/icons/Vs.svg';
import HomeLogo from '../assets/icons/HomeLogo.svg';
import Home1 from '../assets/icons/Home1.svg';
import Home2 from '../assets/icons/Home2.svg';
import Home3 from '../assets/icons/Home3.svg';
import Upload from '../assets/icons/Upload.svg';
import CreateRoom from '../assets/icons/CreateRoom.svg';
import EmptyRoom from '../assets/icons/EmptyRoom.svg';
import Search from '../assets/icons/Search.svg';
import Bear from '../assets/icons/Animals/Bear.svg';
import Bee from '../assets/icons/Animals/Bee.svg';
import Bird from '../assets/icons/Animals/Bird.svg';
import Chicken from '../assets/icons/Animals/Chicken.svg';
import Cow from '../assets/icons/Animals/Cow.svg';
import Dog from '../assets/icons/Animals/Dog.svg';
import Deer from '../assets/icons/Animals/Deer.svg';
import Elephant from '../assets/icons/Animals/Elephant.svg';
import Frog from '../assets/icons/Animals/Frog.svg';
import Giraffe from '../assets/icons/Animals/Giraffe.svg';
import Jellyfish from '../assets/icons/Animals/Jellyfish.svg';
import Koala from '../assets/icons/Animals/Koala.svg';
import Lion from '../assets/icons/Animals/Lion.svg';
import Monkey from '../assets/icons/Animals/Monkey.svg';
import Penguin from '../assets/icons/Animals/Penguin.svg';
import Rabbit from '../assets/icons/Animals/Rabbit.svg';
import Unicorn from '../assets/icons/Animals/Unicorn.svg';
import TopScores from '../assets/icons/TopScores.svg';
import Friends from '../assets/icons/Friends.svg';
import Home from '../assets/icons/Home.svg';
import Profile from '../assets/icons/Profile.svg';
import Scores from '../assets/icons/Scores.svg';
import Back from '../assets/icons/Back.svg';
import Close from '../assets/icons/Close.svg';
import Accept from '../assets/icons/Accept.svg';
import Add from '../assets/icons/Add.svg';
import Delete from '../assets/icons/Delete.svg';
import DropDown from '../assets/icons/DropDown.svg';
import Logo from '../assets/icons/Logo.svg';
import Notification from '../assets/icons/Notification.svg';
import Trash from '../assets/icons/Trash.svg';
import Tick from '../assets/icons/Tick.svg';
import ToastError from '../assets/icons/ToastError.svg';
import ToastSuccess from '../assets/icons/ToastSuccess.svg';
import TestUser from '../assets/icons/TestUser.svg';
import EmptyRequest from '../assets/icons/EmptyRequest.svg';
import Reject from '../assets/icons/Reject.svg';
import HomeActive from '../assets/icons/HomeActive.svg';
import FriendsActive from '../assets/icons/FriendsActive.svg';
import ProfileActive from '../assets/icons/ProfileActive.svg';
import ScoresActive from '../assets/icons/ScoresActive.svg';
import InviteFriend2 from '../assets/icons/InviteFriend2.svg';
import SendActive from '../assets/icons/SendActive.svg';
import Eye from '../assets/icons/Eye.svg';
import EyeOff from '../assets/icons/EyeOff.svg';
import Logout from '../assets/icons/Logout.svg';
import Lose from '../assets/icons/Lose.svg';
import Win from '../assets/icons/Win.svg';
import Draw from '../assets/icons/Draw.svg';
import ArrowRight from '../assets/icons/ArrowRight.svg';
import PrivacyPolicy from '../assets/icons/PrivacyPolicy.svg';
import ChangePassword from '../assets/icons/ChangePassword.svg';

const icons: {[key: string]: React.FC<SvgProps>} = {
  User,
  Mail,
  Lock,
  AddFriend,
  DeleteFriend,
  EmptyFriend,
  Game,
  DoubleChanceJoker,
  FiftyFiftyJoker,
  InviteFriend,
  Send,
  Vs,
  HomeLogo,
  Home1,
  Home2,
  Home3,
  Upload,
  CreateRoom,
  EmptyRoom,
  EmptyRequest,
  Search,
  Bear,
  Bee,
  Bird,
  Chicken,
  Cow,
  Dog,
  Deer,
  Elephant,
  Frog,
  Giraffe,
  Jellyfish,
  Koala,
  Lion,
  Monkey,
  Penguin,
  Rabbit,
  Unicorn,
  TopScores,
  Friends,
  Home,
  Profile,
  Scores,
  Back,
  Close,
  Accept,
  Add,
  Delete,
  DropDown,
  Logo,
  Notification,
  Trash,
  Tick,
  ToastError,
  ToastSuccess,
  TestUser,
  Reject,
  HomeActive,
  FriendsActive,
  ProfileActive,
  ScoresActive,
  InviteFriend2,
  SendActive,
  Eye,
  EyeOff,
  Logout,
  Lose,
  Win,
  Draw,
  ArrowRight,
  PrivacyPolicy,
  ChangePassword,
};

interface IconProps {
  name: string;
  color?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const icon = ({
  name,
  className,
  color,
  width = 24,
  height = 24,
  ...props
}: IconProps) => {
  const Icon = icons[name];
  return (
    <SvgXml
      className={className}
      xml={Icon.toString()}
      width={width}
      height={height}
      color={color}
      {...props}
    />
  );
};
export default icon;
