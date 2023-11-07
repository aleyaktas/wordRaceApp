import React, {useState} from 'react';
import DefaultTemplate from '../../templates/DefaultTemplate';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from '../../themes/icon';
import LinearGradient from 'react-native-linear-gradient';
import {useAppDispatch} from '../../store';
import colors from '../../themes/colors';
import {handlePasswordChange} from './actions';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  return (
    <DefaultTemplate title="Change Password" backIcon>
      <View
        style={styles.iconContainer}
        className="w-32 h-32 rounded-full bg-white mt-11 mb-6 mx-auto">
        <Icon
          className="m-auto"
          name="ChangePassword"
          color={colors.primary}
          width={90}
          height={90}
        />
      </View>

      <View className="flex h-full justify-start items-center">
        <View className="w-full px-5">
          <View className="flex-row justify-between items-center bg-white rounded-xl w-full h-12 px-3 mb-4">
            <TextInput
              className="flex-1 font-poppinsLight text-textPrimary"
              placeholder="Current Password"
              placeholderTextColor={'gray'}
              secureTextEntry={!showPassword}
              value={currentPassword}
              onChangeText={setCurrentPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? 'EyeOff' : 'Eye'}
                width={20}
                height={20}
                color="#BCBCBC"
              />
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between items-center bg-white rounded-xl w-full h-12 px-3">
            <TextInput
              className="flex-1 font-poppinsLight text-textPrimary"
              placeholder="New Password"
              placeholderTextColor={'gray'}
              secureTextEntry={!showNewPassword}
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <TouchableOpacity
              onPress={() => setShowNewPassword(!showNewPassword)}>
              <Icon
                name={showNewPassword ? 'EyeOff' : 'Eye'}
                width={20}
                height={20}
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
              onPress={() =>
                handlePasswordChange(currentPassword, newPassword, dispatch)
              }>
              <Text className="text-white text-base font-poppinsMedium shadow">
                Save Changes
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </DefaultTemplate>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.primary,
  },
});

export default ChangePassword;
