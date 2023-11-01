import React, {useCallback, useEffect, useState} from 'react';
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
import {getScore} from './actions';
import socket from '../../utils/socket';
import {logout} from '../../store/features/auth/authSlice';
import Image from '../../components/Image';
import AwesomeAlert from 'react-native-awesome-alerts';
import * as ImagePicker from 'react-native-image-picker';
import Toast from '../../components/Toast';
import ProfileItem from '../../components/ProfileItem';
import Divider from '../../components/Divider';
import colors from '../../themes/colors';

const Profile = () => {
  const navigation = useNavigation<ScreenProp>();
  const [score, setScore] = useState<number>(0);
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
  const {username, email, profileImage} = useAppSelector(
    (state: StateProps) => state?.auth.user,
  );
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

  const [photo, setPhoto] = useState(profileImage);

  const onButtonPress = useCallback((options: Options) => {
    ImagePicker.launchImageLibrary(options, (response: any) => {
      if (response.didCancel) {
        Toast.open({
          type: 'info',
          title: 'Photo selection canceled',
        });
      } else if (response.errorCode) {
        Toast.open({
          type: 'error',
          title: 'Something went wrong',
        });
      } else {
        setPhoto(response.assets[0].uri);
      }
    });
  }, []);

  const CustomDeleteComponent = () => (
    <View className="flex flex-col justify-center items-center w-full">
      <Icon name="DeleteFriend" width={100} height={100} />
      <Text className="text-base font-poppinsBold text-black my-3">
        Delete Your Account
      </Text>
      <Text className="text-center font-poppinsRegular">
        Are you sure you want to permanently delete your account?
      </Text>
      <View className="flex-row mt-6">
        <TouchableOpacity
          onPress={() => setShowDeleteAccountModal(false)}
          className="w-[48%] h-12 flex justify-center items-center"
          activeOpacity={0.9}>
          <Text className="text-black text-base font-poppinsMedium shadow">
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
    <DefaultTemplate title="Profile">
      <View className="justify-center items-center p-5">
        <View className="my-6">
          <View className="w-[120px] h-[120px] rounded-full overflow-hidden">
            {photo ? (
              <Image
                source={{uri: photo}}
                style={{width: '100%', height: '100%'}}
              />
            ) : (
              <View className=" bg-gray-200 w-full h-full flex justify-center items-center">
                <Text className="text-black text-3xl font-poppinsSemiBold">
                  {username?.charAt(0)?.toUpperCase()}
                </Text>
              </View>
            )}
          </View>
          <TouchableOpacity
            onPress={() => onButtonPress(mediaOptions)}
            className="bg-white w-9 h-9 rounded-full absolute bottom-0 right-0"
            activeOpacity={0.9}>
            <Icon
              className="m-auto"
              name="Upload"
              color="black"
              height="24"
              width="24"
            />
          </TouchableOpacity>
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
            iconName="Home"
            onPress={() => null}
          />
          <Divider
            type="dashed"
            direction="horizontal"
            color={colors.iconBorder}
            style={styles.divider}
          />
          <ProfileItem
            title="Change Password"
            iconName="Home"
            onPress={() => null}
          />
          <Divider
            type="dashed"
            direction="horizontal"
            color={colors.shadowColor}
            style={styles.divider}
          />
          <ProfileItem
            title="Delete Account"
            iconName="Home"
            onPress={() => null}
          />
        </View>
        {/* <View className="w-full px-5">
        <View className="flex-row justify-between items-center bg-white rounded-xl w-full h-12 px-3 mb-4">
          <Text className="flex-1 font-poppinsLight">{username} </Text>
          <Icon name="User" width={24} height={24} color="#BCBCBC" />
        </View>
        <View className="flex-row justify-between items-center bg-white rounded-xl w-full h-12 px-3">
          <Text className="flex-1 font-poppinsLight">{email}</Text>
          <Icon name="Mail" width={24} height={24} color="#BCBCBC" />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChangePassword')}
          activeOpacity={0.9}>
          <Text className="text-sm text-darkGreen font-poppinsMedium underline mt-7">
            Change Your Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setShowDeleteAccountModal(true)}
          activeOpacity={0.9}>
          <Text className="text-sm text-darkRed font-poppinsMedium underline mt-7">
            Delete Account
          </Text>
        </TouchableOpacity>
        {/* <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="w-full rounded-xl my-6"
          colors={['#5BB9CA', '#1D7483']}>
          <TouchableOpacity
            className="w-full h-12 flex justify-center items-center"
            activeOpacity={0.9}>
            <Text className="text-white text-base font-poppinsMedium shadow">
              Save Changes
            </Text>
          </TouchableOpacity>
        </LinearGradient> 
        <TouchableOpacity
          className="flex-row justify-center items-center"
          onPress={() => onClickLogout()}>
          <Icon name="Logout" width={24} height={24} color="black" />
          <Text className="text-sm text-black font-poppinsRegular text-center">
            Logout
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
      </View> */}
      </View>
    </DefaultTemplate>
  );
};

export interface Options {
  selectionLimit?: number;
  includeBase64: boolean;
  includeExtra: boolean;
  mediaType: string;
  saveToPhotos?: boolean;
}

export const mediaOptions: Options = {
  selectionLimit: 0,
  mediaType: 'photo',
  includeBase64: false,
  includeExtra: true,
};

const styles = StyleSheet.create({
  divider: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
});

export default Profile;
