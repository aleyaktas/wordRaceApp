import React, {useEffect, useRef, useState} from 'react';
import DefaultTemplate from '../../templates/DefaultTemplate';
import NoDataCard from '../../components/NoDataCard';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import Icon from '../../themes/icon';
import AwesomeAlert from 'react-native-awesome-alerts';
import InviteFriendCardList from '../../components/InviteFriendCardList';
import AnswerCardList from '../../components/AnswerCardList';
import ChatCardList from '../../components/ChatCardList';
import {useAppSelector} from '../../store';
import {StateProps} from '../../navigation/bottomTabNavigator';
import socket from '../../utils/socket';
import {showMessage} from '../../utils/showMessage';
import {RoomProps} from '../Home/types';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../../navigation/types';
import ProgressCard from '../../components/ProgressCard';
import {AnswerProps, ChatProps, PlayerProps} from './types';
import LinearGradient from 'react-native-linear-gradient';

const Game = () => {
  const navigation = useNavigation<ScreenProp>();
  const scores = [0, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000, 10000];

  const [room, setRoom] = useState<RoomProps>();
  const [rightIcon, setRightIcon] = useState('');
  const [pause, setPause] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [doubleChance, setDoubleChance] = useState(false);
  const [timeProgress, setTimeProgress] = useState(0);
  const [messages, setMessages] = useState<ChatProps[]>([]);
  const [msg, setMsg] = useState('');
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState<AnswerProps>();
  const [showInviteFriendModal, setShowInviteFriendModal] = useState(false);
  const [showPlayAgainModal, setShowPlayAgainModal] = useState(false);
  const [gameResult, setGameResult] = useState('');

  const username = useAppSelector(
    (state: StateProps) => state.auth.user.username,
  );
  const onlineUsers = useAppSelector((state: StateProps) =>
    state.auth.onlineUsers.filter(user => user.username !== username),
  );
  const allFriends = useAppSelector(
    (state: StateProps) => state.auth.user.friends,
  );
  const onlineFriends = onlineUsers?.filter(item =>
    allFriends?.some(i => i.username === item.username),
  );

  const showInviteFriend = (room: RoomProps) => {
    setRightIcon(
      room.players?.filter((player: PlayerProps) => player.isReady).length === 1
        ? 'InviteFriend'
        : '',
    );
  };

  const roomChange = (room: RoomProps) => {
    setRoom(room);
    setQuestion(room.questions[room.questionIndex].question);
    setAnswers(room.questions[room.questionIndex]);
  };

  useEffect(() => {
    socket.on('room_created', ({room}) => {
      setRoom(room);
      showInviteFriend(room);
    });
    socket.on('room_joined', ({room, joinUser}) => {
      console.log('room_joined');
      console.log(room);
      setPause(false);
      roomChange(room);
      setTimeProgress(room.timer);
      setIsTimerRunning(true);
      showInviteFriend(room);
      if (joinUser !== username && room) {
        showMessage(`${joinUser} has joined the room`, 'success');
      }
    });
    socket.on('correct_answered', ({room}) => {
      if (room.questionIndex <= room.questions.length - 1) {
        setTimeProgress(room.timer);
        roomChange(room);
      }
    });
    socket.on('wrong_answered', ({room}) => {
      if (room.questionIndex <= room.questions.length - 1) {
        setTimeProgress(room.timer);
        roomChange(room);
      }
    });
    socket.on('fifty_fifty_joker_used', ({room}) => {
      setRoom(room);
      setAnswers(room.questions[room.questionIndex]);
    });
    socket.on('double_chance_joker_used', ({room}) => {
      setRoom(room);
    });
    socket.on('message_received', ({message}) => {
      setMessages(oldMessages => [...oldMessages, message]);
    });
    socket.on('game_finished', ({result, room}) => {
      setPause(true);
      setRoom(room);
      setIsTimerRunning(false);
      result === 'draw'
        ? setGameResult('draw')
        : setGameResult(result.username);
      setShowPlayAgainModal(true);
    });

    socket.on('started_play_again', ({room}) => {
      console.log('started_play_again');
      console.log(room);
      setTimeProgress(room.timer);
      room.players.filter((player: PlayerProps) => player.isReady).length === 1
        ? setIsTimerRunning(false)
        : setIsTimerRunning(true);
      setPause(false);
      roomChange(room);
    });
    socket.on('leave_room', ({room}) => {
      setIsTimerRunning(false);
      setTimeProgress(0);
      setRoom(room);
      showInviteFriend(room);
    });
    socket.on('opponent_quit', ({username, room}) => {
      setRoom(room);
      setIsTimerRunning(false);
      showMessage(`${username} has left the room`, 'error');
    });
  }, []);

  useEffect(() => {
    return () => {
      socket.emit('left_room', {username});
      socket.off('room_joined');
      socket.off('room_created');
      socket.off('leave_room');
      socket.off('correct_answered');
      socket.off('wrong_answered');
      socket.off('fifty_fifty_joker_used');
      socket.off('game_finished');
      socket.off('started_play_again');
      socket.off('opponent_quit');
      socket.off('message_received');
    };
  }, []);

  const checkAnswer = (answer: string) => {
    if (
      !room?.players.find(player => player.username === username)?.isYourTurn
    ) {
      return showMessage('Not your turn', 'error');
    }
    const findMe = room?.players.find(player => player.username === username);
    if (findMe?.isYourTurn && room) {
      if (answer === room.questions[room.questionIndex].answer) {
        socket.emit('correct_answer', {username, roomId: room.id});
        doubleChance && setDoubleChance(false);
        showMessage('Correct Answer', 'success');
      }
      if (room.questionIndex === 19) {
        socket.emit('game_over', {roomId: room.id});
      }
      if (
        doubleChance &&
        answer !== room.questions[room.questionIndex].answer
      ) {
        setDoubleChance(false);
        return showMessage('Wrong Answer', 'error');
      }
      if (answer !== room.questions[room.questionIndex].answer) {
        socket.emit('wrong_answer', {username, roomId: room.id});
        showMessage('Wrong Answer', 'error');
      }
    }
  };

  const onClickSendMsg = () => {
    if (msg.trim() !== '') {
      socket.emit('send_message', {username, roomId: room.id, msg});
      setMsg('');
      Keyboard.dismiss();
    }
  };

  const handleJoker = (joker: string) => {
    const findMe: PlayerProps = room?.players.find(
      player => player.username === username,
    );

    if (
      room &&
      findMe &&
      findMe.isYourTurn &&
      !findMe.usedJokers.includes(joker)
    ) {
      if (joker === 'fifty_fifty') {
        socket.emit('fifty_fifty_joker', {username, roomId: room.id});
      }
      if (joker === 'double_chance') {
        setDoubleChance(true);
        socket.emit('double_chance_joker', {username, roomId: room.id});
      }
    }
  };

  const timeOver = () => {
    console.log('time over');
    console.log(room?.players);
    console.log(room?.players.find(player => player.isYourTurn)?.username);
    console.log(username);
    console.log(pause);

    if (
      room &&
      room.players &&
      room.players.find(player => player.isYourTurn)?.username === username &&
      !pause
    ) {
      socket.emit('wrong_answer', {username, roomId: room.id});
      setTimeProgress(room.timer);
      showMessage('Time is up!', 'error');
    }
  };

  const onClickInvite = ({invitedUsername}: {invitedUsername: string}) => {
    socket.emit('invite_user', {
      username: invitedUsername,
      ownerUser: username,
    });
    showMessage('Invitation sent', 'success');
  };

  const onClickAgainGame = (value: boolean) => {
    setShowPlayAgainModal(false);
    setIsTimerRunning(false);
    console.log('onClickAgainGame');
    console.log(room);
    console.log(value);
    if (value) {
      console.log(value);
      socket.emit('play_again', {roomId: room.id, username});
    } else {
      navigation.navigate('Home');
      socket.emit('quit_game', {roomId: room.id, username});
    }
  };

  const CustomAddComponent = () => (
    <View className="w-full max-h-80">
      <TouchableOpacity
        activeOpacity={0.9}
        className="flex justify-center items-center border rounded-xl border-gray-300 w-8 h-8 ml-auto"
        onPress={() => setShowInviteFriendModal(false)}>
        <Icon name="Close" width={24} height={24} color="black" />
      </TouchableOpacity>
      {onlineFriends?.length > 0 ? (
        <InviteFriendCardList
          friends={onlineFriends}
          onClickInvite={invitedUsername => onClickInvite({invitedUsername})}
        />
      ) : (
        <Text className="text-sm font-poppinsRegular text-black text-center my-2">
          You don't have online friends.
        </Text>
      )}
    </View>
  );

  const CustomPlayAgainComponent = () => (
    <View className="flex flex-col justify-center items-center w-full">
      <Icon
        name={
          gameResult === 'draw'
            ? 'Draw'
            : gameResult === username
            ? 'Win'
            : 'Lose'
        }
        width={100}
        height={100}
      />
      <Text className="text-base font-poppinsBold text-black my-3">
        {gameResult === 'draw'
          ? 'Draw'
          : gameResult === username
          ? 'You Won'
          : 'You Lost'}
      </Text>
      <Text className="text-center font-poppinsRegular">
        Do you want to play again?
      </Text>
      <View className="flex-row mt-6">
        <TouchableOpacity
          onPress={() => {
            onClickAgainGame(false);
            setShowPlayAgainModal(false);
          }}
          className="w-[48%] h-12 flex justify-center items-center"
          activeOpacity={0.9}>
          <Text className="text-black text-base font-poppinsMedium shadow">
            No
          </Text>
        </TouchableOpacity>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="w-[48%] rounded-xl"
          colors={['#5BB9CA', '#1D7483']}>
          <TouchableOpacity
            onPress={async () => {
              setShowPlayAgainModal(false);
              onClickAgainGame(true);
            }}
            className="w-full h-12 flex justify-center items-center"
            activeOpacity={0.9}>
            <Text className="text-white text-base font-poppinsMedium shadow">
              Yes
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );

  const RenderWaiting = () => (
    <NoDataCard
      image="Game"
      description="Waiting for other player. Do you want to invite your friend?"
      buttonLabel="Invite Friend"
      buttonAction={() => setShowInviteFriendModal(true)}
    />
  );

  const RenderGame = () => (
    <>
      <View className="p-5">
        <View className="w-full h-16 !bg-questionCard rounded-xl mb-6">
          <Text className="m-auto text-white text-lg font-poppinsMedium">
            {question}
          </Text>
        </View>
        {answers && (
          <AnswerCardList
            answers={answers}
            handleCheck={(answer: string) => checkAnswer(answer)}
          />
        )}
        <View className="flex gap-2 flex-row ml-auto my-3">
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => handleJoker('fifty_fifty')}>
            <Icon
              name="FiftyFiftyJoker"
              width={32}
              height={32}
              color={
                room?.players
                  .find(player => player.username === username)
                  ?.usedJokers.includes('fifty_fifty')
                  ? '#BCBCBC'
                  : '#0DBB7E'
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => handleJoker('double_chance')}>
            <Icon
              name="DoubleChanceJoker"
              width={32}
              height={32}
              color={
                room?.players
                  .find(player => player.username === username)
                  ?.usedJokers.includes('double_chance')
                  ? '#BCBCBC'
                  : '#0DBB7E'
              }
            />
          </TouchableOpacity>
        </View>
        <View className="w-full border-b border-gray-300" />
      </View>
    </>
  );

  return (
    <DefaultTemplate
      title="Game"
      backIcon
      leftIconAction={() => navigation.navigate('Home')}
      rightIconName={rightIcon}
      rightIconAction={() => setShowInviteFriendModal(true)}>
      <View className="flex-row justify-center items-center mt-4">
        {room && (
          <ProgressCard
            time={timeProgress}
            isTimerRunning={isTimerRunning}
            whoIsNext={room.players.find(player => player.isYourTurn)?.username}
            userplay1={room.players[0].username}
            userplay1Score={scores[room.players[0]?.scoreIndex]}
            userplay2={
              room?.players[1] ? room?.players[1].username : 'Waiting...'
            }
            userplay2Score={scores[room.players[1]?.scoreIndex] || 0}
            timeOver={() => timeOver()}
          />
        )}
      </View>
      {room &&
      room.players?.filter((player: PlayerProps) => player.isReady).length ===
        1 ? (
        <RenderWaiting />
      ) : (
        <>
          <RenderGame />
          {messages?.length > 0 && (
            <ChatCardList messages={messages} username={username} />
          )}
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => onClickSendMsg()}
            className="w-full absolute bottom-0 right-0 left-0 h-[52px] bg-white rounded-xl flex-row justify-between px-5 items-center">
            <TextInput
              placeholder="Send message"
              placeholderTextColor={'gray'}
              className="!text-gray-800 font-poppinsRegular text-sm flex-1"
              value={msg}
              onChangeText={setMsg}
            />
            <Icon name="SendActive" width={32} height={32} />
          </TouchableOpacity>
        </>
      )}

      <AwesomeAlert
        show={showInviteFriendModal}
        showProgress={false}
        customView={<CustomAddComponent />}
        contentContainerStyle={{
          width: Dimensions.get('window').width - 50,
          borderRadius: 12,
        }}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        onCancelPressed={() => {
          setShowInviteFriendModal(false);
        }}
        onConfirmPressed={() => {
          setShowInviteFriendModal(false);
        }}
        onDismiss={() => {
          setShowInviteFriendModal(false);
        }}
      />
      <AwesomeAlert
        show={showPlayAgainModal}
        showProgress={false}
        customView={<CustomPlayAgainComponent />}
        contentContainerStyle={{
          width: Dimensions.get('window').width - 50,
          borderRadius: 12,
        }}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        onCancelPressed={() => {
          setShowPlayAgainModal(false);
        }}
        onConfirmPressed={() => {
          setShowPlayAgainModal(false);
        }}
        onDismiss={() => {
          setShowPlayAgainModal(false);
        }}
      />
    </DefaultTemplate>
  );
};

export default Game;
