import React, {useState} from 'react';
import DefaultTemplate from '../../templates/DefaultTemplate';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import NoDataCard from '../../components/NoDataCard';
import AwesomeAlert from 'react-native-awesome-alerts';
import {TextInput} from 'react-native-gesture-handler';
import Icon from '../../themes/icon';
import LinearGradient from 'react-native-linear-gradient';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const CustomComponent = () => (
    <View className="flex flex-col justify-center items-center w-full">
      <Icon name="AddFriend" width={100} height={100} />
      <Text className="text-base font-bold text-black my-3">Add Friend</Text>
      <View className="bg-textInput rounded-xl h-12 px-3 w-full">
        <TextInput className="w-full" placeholder="Friend username" />
      </View>
      <View className="flex-row mt-6">
        <TouchableOpacity
          onPress={() => setShowAlert(false)}
          className="w-[48%] h-12 flex justify-center items-center"
          activeOpacity={0.9}>
          <Text className="text-black text-base font-medium shadow">
            Cancel
          </Text>
        </TouchableOpacity>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="w-[48%] rounded-xl"
          colors={['#5BB9CA', '#1D7483']}>
          <TouchableOpacity
            onPress={() => setShowAlert(false)}
            className="w-full h-12 flex justify-center items-center"
            activeOpacity={0.9}>
            <Text className="text-white text-base font-medium shadow">Add</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );

  return (
    <DefaultTemplate
      rightIconName="Add"
      leftIconName="Friends"
      title="Friends"
      rightIconAction={() => setShowAlert(true)}>
      {friends.length === 0 ? (
        <NoDataCard
          image="EmptyFriend"
          description="You have no friends yet. Would you like to add friends?"
          buttonLabel="Add Friend"
          buttonAction={() => setShowAlert(true)}
        />
      ) : (
        <Text>Friends List</Text>
      )}
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        customView={<CustomComponent />}
        contentContainerStyle={{
          width: Dimensions.get('window').width - 50,
          borderRadius: 12,
        }}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        onCancelPressed={() => {
          setShowAlert(false);
        }}
        onConfirmPressed={() => {
          setShowAlert(false);
        }}
        onDismiss={() => {
          setShowAlert(false);
        }}
      />
    </DefaultTemplate>
  );
};

export default Friends;
