import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from '../../themes/icon';
import LinearGradient from 'react-native-linear-gradient';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../../navigation/types';
import Toast from '../../components/Toast';
import DefaultTemplate from '../../templates/DefaultTemplate';
import {AppDispatch} from '../../store';
import {useDispatch} from 'react-redux';
import {setNewPassword} from './actions';

const NewPassword = ({
  route,
}: {
  route: RouteProp<{params: {email: String}}>;
}) => {
  const [password, setPassword] = useState('');

  const navigation = useNavigation<ScreenProp>();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <DefaultTemplate backIcon bgColor="white">
      <View className="flex w-full h-full mt-24 items-center px-5">
        <Icon name="Logo" width={100} height={100} />
        <Text className="font-poppinsBold text-2xl text-gray-900 my-3">
          New Password
        </Text>
        <Text className="font-poppinsRegular text-sm text-textSecondary px-10 text-center mb-6 mt-1">
          Please enter the information for change password
        </Text>
        <View className="flex-row justify-between items-center bg-textInput rounded-xl w-full h-12 px-3">
          <TextInput
            className="flex-1 font-poppinsLight"
            placeholder="New Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Icon name="Lock" width={24} height={24} color="#BCBCBC" />
        </View>

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="w-full rounded-xl mt-6 mb-7"
          colors={['#5BB9CA', '#1D7483']}>
          <TouchableOpacity
            onPress={() => {
              setNewPassword(
                route.params.email,
                password,
                navigation,
                dispatch,
              );
            }}
            className="w-full h-12 flex justify-center items-center"
            activeOpacity={0.9}>
            <Text className="text-white text-base font-poppinsMedium shadow">
              Save
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </DefaultTemplate>
  );
};

export default NewPassword;
