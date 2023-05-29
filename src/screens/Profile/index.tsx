import React, {useEffect, useState} from 'react';
import DefaultTemplate from '../../templates/DefaultTemplate';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import Icon from '../../themes/icon';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {ScreenProp} from '../../navigation/types';
import {StateProps} from '../../navigation/bottomTabNavigator';
import {useAppSelector} from '../../store';
import {getScore} from './actions';

const Profile = () => {
  const navigation = useNavigation<ScreenProp>();
  const [score, setScore] = useState<number>(0);
  const {username, email, profileImage} = useAppSelector(
    (state: StateProps) => state?.auth.user,
  );

  const isFocused = useIsFocused();
  useEffect(() => {
    getScore(setScore);
  }, [isFocused]);

  return (
    <DefaultTemplate title="Profile">
      <View className="justify-center items-center">
        <View className="my-6">
          <View className="w-[120px] h-[120px] rounded-full overflow-hidden">
            {profileImage ? (
              <Image
                source={{uri: profileImage}}
                style={{width: '100%', height: '100%'}}
              />
            ) : (
              <View className=" bg-gray-200 w-full h-full flex justify-center items-center">
                <Text className="text-black text-3xl font-poppinsSemiBold">
                  {username.charAt(0)?.toUpperCase()}
                </Text>
              </View>
            )}
          </View>
          <TouchableOpacity
            onPress={() => null}
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
      </View>
      <View className="w-full px-5">
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
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="w-full rounded-xl mt-6 mb-6"
          colors={['#5BB9CA', '#1D7483']}>
          <TouchableOpacity
            className="w-full h-12 flex justify-center items-center"
            activeOpacity={0.9}>
            <Text className="text-white text-base font-poppinsMedium shadow">
              Save Changes
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </DefaultTemplate>
  );
};

export default Profile;
