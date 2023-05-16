import React from 'react';
import {SvgProps, SvgXml} from 'react-native-svg';
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
};

interface IconProps {
  name: string;
  color?: string;
  width?: string | number;
  height?: string | number;
}

const icon = ({name, color, width = 24, height = 24, ...props}: IconProps) => {
  const Icon = icons[name];
  return (
    <SvgXml
      xml={Icon.toString()}
      width={width}
      height={height}
      color={color}
      {...props}
    />
  );
};
export default icon;
