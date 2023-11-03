import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Icon from '../../themes/icon';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../../navigation/types';
import DefaultTemplate from '../../templates/DefaultTemplate';
import {resetPassword} from './actions';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';

const SendMail = () => {
  const navigation = useNavigation<ScreenProp>();
  const [mail, setMail] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  return (
    <DefaultTemplate backIcon bgColor="white">
      <View className="flex w-full h-full mt-24 items-center px-5">
        <Icon name="Logo" width={100} height={100} />
        <Text className="font-poppinsBold text-2xl text-gray-900 my-3">
          Forgot Password
        </Text>
        <Text className="font-poppinsRegular text-sm text-textSecondary px-10 text-center mb-6 mt-1">
          Please enter your email address.
        </Text>
        <View className="flex-row justify-between items-center bg-textInput rounded-xl w-full h-12 px-3">
          <TextInput
            className="flex-1 font-poppinsLight"
            placeholder="Your Email"
            value={mail}
            onChangeText={setMail}
          />
          <Icon name="Mail" width={24} height={24} color="#BCBCBC" />
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="w-full rounded-xl mt-6 mb-4"
          colors={['#5BB9CA', '#1D7483']}>
          <TouchableOpacity
            className="w-full h-12 flex justify-center items-center"
            activeOpacity={0.9}
            onPress={() => resetPassword(mail, navigation, dispatch)}>
            <Text className="text-white text-base font-poppinsMedium shadow">
              Send Code
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </DefaultTemplate>
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginTop: 10,
    flexDirection: 'row',
  },
  cell: {
    width: 47,
    height: 47,
    lineHeight: 43,
    fontSize: 19,
    borderWidth: 0,
    borderColor: '#f5f5f5',
    backgroundColor: '#f5f5f5',
    borderRadius: 13,
    overflow: 'hidden',
    textAlign: 'center',
    marginHorizontal: 7,
  },
  focusCell: {
    borderColor: '#075765',
    borderWidth: 1,
  },
  headerWrapper: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
    textAlign: 'center',
    marginTop: 15,
  },
});

export default SendMail;
