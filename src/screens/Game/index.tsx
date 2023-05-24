import React, {useState} from 'react';
import DefaultTemplate from '../../templates/DefaultTemplate';
import NoDataCard from '../../components/NoDataCard';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from '../../themes/icon';
import AwesomeAlert from 'react-native-awesome-alerts';
import InviteFriendCardList from '../../components/InviteFriendCardList';
import {Line} from 'react-native-svg';
import AnswerCardList from '../../components/AnswerCardList';

const Game = () => {
  const [friends, setFriends] = useState([
    {
      name: 'aleyna',
      image: 'https://i.pravatar.cc/300?img=1',
    },
  ]);
  const [showInviteFriendModal, setShowInviteFriendModal] = useState(false);
  const [question, setQuestion] = useState('responsible');
  const [answers, setAnswers] = useState([
    'soğuk algınlığı',
    'sorumluluk',
    'beyin',
    'zorlukların üstesinden gelmek',
  ]);

  const CustomAddComponent = () => (
    <View className="w-full max-h-80">
      <TouchableOpacity
        activeOpacity={0.9}
        className="flex justify-center items-center border rounded-xl border-gray-300 w-8 h-8 ml-auto"
        onPress={() => setShowInviteFriendModal(false)}>
        <Icon name="Close" width={24} height={24} color="black" />
      </TouchableOpacity>
      <Icon name="InviteFriend2" width={100} height={100} className="mx-auto" />
      <Text className="text-base font-poppinsBold text-black my-3 text-center">
        Invite Your Friend
      </Text>
      {friends.length > 0 ? (
        <InviteFriendCardList friends={friends} />
      ) : (
        <Text className="text-sm font-poppinsRegular text-black text-center my-2">
          You don't have online friends.
        </Text>
      )}
    </View>
  );

  const RenderWaiting = () => (
    <NoDataCard
      image="Game"
      description="Waiting for other player. Do you want to invite your friend?"
      buttonLabel="Invite Friend"
    />
  );

  const RenderGame = () => (
    <View className="p-5 ">
      <View className="w-full h-16 !bg-questionCard rounded-xl">
        <Text className="m-auto text-white font-poppinsMedium">{question}</Text>
      </View>
      <AnswerCardList answers={answers} />
      <View className="flex gap-1 flex-row ml-auto">
        <Icon name="FiftyFiftyJoker" width={32} height={32} color="#0DBB7E" />
        <Icon name="DoubleChanceJoker" width={32} height={32} color="#0DBB7E" />
      </View>
      <View className="w-full border-b border-gray-400" />
    </View>
  );

  return (
    <DefaultTemplate
      title="Game"
      backIcon
      rightIconName="InviteFriend"
      rightIconAction={() => setShowInviteFriendModal(true)}>
      <View className="flex-row justify-center items-center gap-4 mt-4">
        <View className="w-32" style={{alignItems: 'center'}}>
          <Text className="font-poppinsRegular text-black text-sm">
            aleyaktas
          </Text>
          <Text className="font-poppinsMedium text-black text-xl">0</Text>
        </View>
        <Icon name="Vs" width={40} height={36} color="black" />
        <View className="w-32" style={{alignItems: 'center'}}>
          <Text className="font-poppinsRegular text-black text-sm">
            Waiting...
          </Text>
          <Text className="font-poppinsMedium text-black text-xl">0</Text>
        </View>
      </View>
      <RenderGame />
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
    </DefaultTemplate>
  );
};

export default Game;