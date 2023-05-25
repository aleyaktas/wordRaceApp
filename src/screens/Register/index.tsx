import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from '../../themes/icon';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../../navigation/types';
import colors from '../../themes/colors';

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation<ScreenProp>();

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
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
        />
        <Icon name="User" width={24} height={24} color="#BCBCBC" />
      </View>
      <View className="flex-row justify-between items-center bg-textInput rounded-xl w-full h-12 px-3 mt-4">
        <TextInput className="flex-1 font-poppinsLight" placeholder="Email" />
        <Icon name="Mail" width={24} height={24} color="#BCBCBC" />
      </View>
      <View className="flex-row justify-between items-center bg-textInput rounded-xl w-full h-12 px-3 my-4">
        <TextInput
          className="flex-1 font-poppinsLight"
          placeholder="Password"
          secureTextEntry
        />
        <Icon name="Lock" width={24} height={24} color="#BCBCBC" />
      </View>
      <View className="flex-row gap-2 mr-auto w-fit">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={toggleCheckbox}
          className="flex justify-center items-center w-6 h-5 bg-gray-200 rounded-md">
          {isChecked && (
            <Icon name="Tick" width={16} height={16} color={colors.primary} />
          )}
        </TouchableOpacity>
        <TouchableOpacity className="w-fit mr-auto" activeOpacity={0.9}>
          <Text className="text-darkGreen font-poppinsMedium text-sm">
            I agree to the Terms and Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        className="w-full rounded-xl mt-6 mb-7"
        colors={['#5BB9CA', '#1D7483']}>
        <TouchableOpacity
          className="w-full h-12 flex justify-center items-center"
          activeOpacity={0.9}>
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
