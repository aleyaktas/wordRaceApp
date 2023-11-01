import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from '../../themes/icon';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../../navigation/types';
import colors from '../../themes/colors';
import {handleRegister} from './actions';
import {AppDispatch, useAppSelector} from '../../store';
import {useDispatch} from 'react-redux';
import {StateProps} from '../../navigation/bottomTabNavigator';
import {updateAcceptStatus} from '../../store/features/auth/authSlice';

const Register = () => {
  const navigation = useNavigation<ScreenProp>();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  const isChecked = useAppSelector(
    (state: StateProps) => state.auth.acceptPrivacy,
  );

  const toggleCheckbox = () => {
    navigation.navigate('PrivacyPolicy');
  };

  return (
    <View className="flex w-full h-full mt-24 items-center px-5">
      <Icon name="Logo" width={100} height={100} />
      <Text className="font-poppinsBold text-2xl text-gray-900 my-3">
        Create Account
      </Text>
      <Text className="font-poppinsRegular text-sm text-textSecondary px-10 text-center mb-6 mt-1">
        Welcome to the Word Race app, please enter the information below to
        create an account for you
      </Text>
      <View className="flex-row justify-between items-center bg-textInput rounded-xl w-full h-12 px-3">
        <TextInput
          className="flex-1 font-poppinsLight"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <Icon name="User" width={24} height={24} color="#BCBCBC" />
      </View>
      <View className="flex-row justify-between items-center bg-textInput rounded-xl w-full h-12 px-3 mt-4">
        <TextInput
          className="flex-1 font-poppinsLight"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Icon name="Mail" width={24} height={24} color="#BCBCBC" />
      </View>
      <View className="flex-row justify-between items-center bg-textInput rounded-xl w-full h-12 px-3 my-4">
        <TextInput
          className="flex-1 font-poppinsLight"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Icon name="Lock" width={24} height={24} color="#BCBCBC" />
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        className="flex-row gap-2 mr-auto w-fit"
        onPress={toggleCheckbox}>
        <TouchableOpacity
          activeOpacity={0.9}
          className="flex justify-center items-center w-6 h-5 bg-gray-200 rounded-md"
          onPress={() => {
            if (!isChecked) {
              return navigation.navigate('PrivacyPolicy');
            }
            dispatch(updateAcceptStatus(!isChecked));
          }}>
          {isChecked && (
            <Icon name="Tick" width={16} height={16} color={colors.primary} />
          )}
        </TouchableOpacity>
        <View className="w-fit mr-auto">
          <Text className="text-darkGreen font-poppinsMedium text-sm">
            I agree to the Privacy Policy
          </Text>
        </View>
      </TouchableOpacity>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        className="w-full rounded-xl mt-6 mb-7"
        colors={['#5BB9CA', '#1D7483']}>
        <TouchableOpacity
          className="w-full h-12 flex justify-center items-center"
          activeOpacity={0.9}
          onPress={() =>
            handleRegister(
              isChecked,
              username,
              email,
              password,
              navigation,
              dispatch,
            )
          }>
          <Text className="text-white text-base font-poppinsMedium shadow">
            Register
          </Text>
        </TouchableOpacity>
      </LinearGradient>
      <View className="flex-row gap-1">
        <Text className="text-gray-900 text-sm font-poppinsMedium">
          Already have an account?
        </Text>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Login')}>
          <Text className="text-darkGreen text-sm font-poppinsBold">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
