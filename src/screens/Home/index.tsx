import React, {useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import HomePageTemplate from '../../templates/HomePageTemplate';
import NoDataCard from '../../components/NoDataCard';
import AwesomeAlert from 'react-native-awesome-alerts';
import Icon from '../../themes/icon';
import {TextInput} from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedTimer, setSelectedTimer] = useState({
    label: '20sn',
    value: '20',
  });
  const [selectedRoomStatus, setSelectedRoomStatus] = useState({
    label: 'Public',
    value: 'Public',
  });

  const CustomComponent = () => (
    <View className="flex flex-col justify-center items-center w-full">
      <Icon name="CreateRoom" width={100} height={100} />
      <Text className="text-base font-bold text-black my-3">Create Room</Text>
      <View className="bg-textInput rounded-xl h-12 px-3 w-full">
        <TextInput className="w-full" placeholder="Room Name" />
      </View>
      <View className="flex-row justify-between w-full">
        <View className="flex w-[48%] text-black placeholder:text-black  bg-textInput rounded-xl h-12 mt-4">
          <RNPickerSelect
            onValueChange={value => setSelectedTimer(value)}
            items={[
              {label: '20sn', value: '20'},
              {label: '15sn', value: '15'},
              {label: '10sn', value: '10'},
            ]}
            value={selectedTimer}
            placeholder={{}}
          />
        </View>
        <View className="flex w-[48%] text-black placeholder:text-black  bg-textInput rounded-xl h-12 mt-4">
          <RNPickerSelect
            onValueChange={value => setSelectedRoomStatus(value)}
            items={[
              {label: 'Public', value: 'Public'},
              {label: 'Private', value: 'Private'},
            ]}
            value={selectedRoomStatus}
            placeholder={{}}
          />
        </View>
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
            <Text className="text-white text-base font-medium shadow">
              Create
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );

  return (
    <HomePageTemplate setShowAlert={setShowAlert}>
      <View>
        {rooms.length === 0 ? (
          <NoDataCard
            image="EmptyRoom"
            description="There are no online room. You can create room to play"
            buttonLabel="Create Room"
            buttonAction={() => setShowAlert(true)}
          />
        ) : (
          <View>
            <Text>Home</Text>
          </View>
        )}
      </View>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        customView={<CustomComponent />}
        contentContainerStyle={{
          width: Dimensions.get('window').width - 50,
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
    </HomePageTemplate>
  );
};

export default Home;
