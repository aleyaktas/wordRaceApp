import React, {useState} from 'react';
import DefaultTemplate from '../../templates/DefaultTemplate';
import {TextInput, Image, View, TouchableOpacity, Text} from 'react-native';
import Icon from '../../themes/icon';
import LinearGradient from 'react-native-linear-gradient';
import {changePassword} from '../../store/features/auth/authSlice';
import {showMessage} from '../../utils/showMessage';
import {useAppDispatch} from '../../store';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handlePasswordChange = async () => {
    if (currentPassword && newPassword) {
      if (newPassword.length < 6 || newPassword.length > 20) {
        return showMessage(
          'Password must be between 6 and 20 characters',
          'error',
        );
      }
      const res: any = await dispatch(
        changePassword({
          oldPassword: currentPassword,
          newPassword,
        }),
      );
      if (res.payload?.errors) {
        return showMessage(res.payload.errors[0].msg, 'error');
      }
      return showMessage('Password changed successfully', 'success');
    } else return showMessage('Please fill all fields', 'error');
  };
  return (
    <DefaultTemplate title="Change Password" backIcon>
      <Image
        className="w-[100px] h-[100px] rounded-full mx-auto mt-6 my-10"
        source={{
          uri: 'https://static.booksy.com/static/live/covers/make_up.jpg',
        }}
      />
      <View className="w-full px-5">
        <View className="flex-row justify-between items-center bg-white rounded-xl w-full h-12 px-3 mb-4">
          <TextInput
            className="flex-1 font-poppinsLight"
            placeholder="Current Password"
            secureTextEntry={!showPassword}
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? 'EyeOff' : 'Eye'}
              width={24}
              height={24}
              color="#BCBCBC"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between items-center bg-white rounded-xl w-full h-12 px-3">
          <TextInput
            className="flex-1 font-poppinsLight"
            placeholder="New Password"
            secureTextEntry={!showNewPassword}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TouchableOpacity
            onPress={() => setShowNewPassword(!showNewPassword)}>
            <Icon
              name={showNewPassword ? 'EyeOff' : 'Eye'}
              width={24}
              height={24}
              color="#BCBCBC"
            />
          </TouchableOpacity>
        </View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="w-full rounded-xl mt-6 mb-6"
          colors={['#5BB9CA', '#1D7483']}>
          <TouchableOpacity
            className="w-full h-12 flex justify-center items-center"
            activeOpacity={0.9}
            onPress={() => handlePasswordChange()}>
            <Text className="text-white text-base font-poppinsMedium shadow">
              Save Changes
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </DefaultTemplate>
  );
};

export default ChangePassword;
