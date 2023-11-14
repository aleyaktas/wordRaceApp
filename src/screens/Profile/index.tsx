import React, {useEffect, useState} from 'react';
import DefaultTemplate from '../../templates/DefaultTemplate';
import {
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Icon from '../../themes/icon';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {ScreenProp} from '../../navigation/types';
import {StateProps} from '../../navigation/bottomTabNavigator';
import {useAppDispatch, useAppSelector} from '../../store';
import {getScore, handleDeleteAccount} from './actions';
import socket from '../../utils/socket';
import {logout} from '../../store/features/auth/authSlice';
import Image from '../../components/Image';
import AwesomeAlert from 'react-native-awesome-alerts';
import ProfileItem from '../../components/ProfileItem';
import Divider from '../../components/Divider';
import colors from '../../themes/colors';
import {ScrollView} from 'react-native';

const Profile = () => {
  const navigation = useNavigation<ScreenProp>();
  const [score, setScore] = useState<number>(0);
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
  const {username, email, profileImage} = useAppSelector(
    (state: StateProps) => state?.auth.user,
  );
  const {token} = useAppSelector((state: StateProps) => state?.auth);
  const dispatch = useAppDispatch();

  const isFocused = useIsFocused();
  useEffect(() => {
    getScore(setScore);
  }, [isFocused]);

  const onClickLogout = async () => {
    socket.emit('logout_user', {username});
    await dispatch(logout());
    navigation.navigate('Login');
  };

  const CustomDeleteComponent = () => (
    <View className="flex flex-col justify-center items-center w-full">
      <Icon name="DeleteFriend" width={100} height={100} />
      <Text className="text-base font-poppinsBold text-textPrimary my-3">
        Delete Your Account
      </Text>
      <Text className="text-center font-poppinsRegular text-textPrimary">
        Are you sure you want to permanently delete your account?
      </Text>
      <View className="flex-row mt-6">
        <TouchableOpacity
          onPress={() => setShowDeleteAccountModal(false)}
          className="w-[48%] h-12 flex justify-center items-center"
          activeOpacity={0.9}>
          <Text className="text-textPrimary text-base font-poppinsMedium shadow">
            Cancel
          </Text>
        </TouchableOpacity>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="w-[48%] rounded-xl"
          colors={['#5BB9CA', '#1D7483']}>
          <TouchableOpacity
            onPress={async () => {
              handleDeleteAccount(dispatch, navigation);
              setShowDeleteAccountModal(false);
            }}
            className="w-full h-12 flex justify-center items-center"
            activeOpacity={0.9}>
            <Text className="text-white text-base font-poppinsMedium shadow">
              Delete
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );

  return (
    <DefaultTemplate title="Profile" scroll>
      <View className="justify-center items-center p-5">
        <View className="my-6">
          <View className="w-[120px] h-[120px] rounded-full overflow-hidden">
            {profileImage ? (
              <Image
                source={{uri: profileImage}}
                style={{width: '100%', height: '100%'}}
              />
            ) : (
              <View className=" bg-gray-200 w-full h-full flex justify-center items-center">
                <Text className="text-textPrimary text-3xl font-poppinsSemiBold">
                  {username?.charAt(0)?.toUpperCase()}
                </Text>
              </View>
            )}
          </View>
        </View>
        <Text className="text-base font-poppinsMedium text-gray-800 mb-4">
          Your Score :
          <Text className="text-darkGreen font-poppinsBold">{score}p</Text>
        </Text>

        <Text className="text-gray-800 font-poppinsBold text-lg py-2 mr-auto">
          Account
        </Text>
        <View className="bg-white w-full">
          <ProfileItem
            title="Edit Account"
            iconName="User"
            onPress={() => {
              !token
                ? navigation.navigate('Login')
                : navigation.navigate('EditAccount');
            }}
          />
          <Divider
            type="dashed"
            direction="horizontal"
            color={colors.iconBorder}
            style={styles.divider}
          />
          <ProfileItem
            title="Change Password"
            iconName="Lock"
            onPress={() => {
              !token
                ? navigation.navigate('Login')
                : navigation.navigate('ChangePassword');
            }}
          />
          <Divider
            type="dashed"
            direction="horizontal"
            color={colors.shadowColor}
            style={styles.divider}
          />
          <ProfileItem
            title="Delete Account"
            iconName="Trash"
            onPress={() => {
              !token
                ? navigation.navigate('Login')
                : setShowDeleteAccountModal(true);
            }}
          />
        </View>
        <Text className="text-gray-800 font-poppinsBold text-lg py-2 mt-3 mr-auto">
          Privacy Policy
        </Text>
        <View className="bg-white w-full">
          <ProfileItem
            title="Privacy Policy"
            iconName="PrivacyPolicy"
            onPress={() => navigation.navigate('PrivacyPolicy')}
          />
          <Divider
            type="dashed"
            direction="horizontal"
            color={colors.iconBorder}
            style={styles.divider}
          />
        </View>

        <TouchableOpacity
          className="flex-row justify-center items-center mt-5"
          onPress={() => {
            !token ? navigation.navigate('Login') : onClickLogout();
          }}>
          <Icon name="Logout" width={24} height={24} color="black" />
          <Text className="text-sm text-textPrimary font-poppinsRegular text-center">
            {!token ? 'Login' : 'Logout'}
          </Text>
        </TouchableOpacity>
        <AwesomeAlert
          show={showDeleteAccountModal}
          showProgress={false}
          customView={<CustomDeleteComponent />}
          contentContainerStyle={{
            width: Dimensions.get('window').width - 50,
            borderRadius: 12,
          }}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          onCancelPressed={() => {
            setShowDeleteAccountModal(false);
          }}
          onConfirmPressed={() => {
            setShowDeleteAccountModal(false);
          }}
          onDismiss={() => {
            setShowDeleteAccountModal(false);
          }}
        />
      </View>
    </DefaultTemplate>
  );
};

const styles = StyleSheet.create({
  divider: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
});

export default Profile;
