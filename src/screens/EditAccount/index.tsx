import React, {useCallback, useState} from 'react';
import DefaultTemplate from '../../templates/DefaultTemplate';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from '../../themes/icon';
import {AppDispatch, useAppSelector} from '../../store';
import {StateProps} from '../../navigation/bottomTabNavigator';
import Image from '../../components/Image';
import * as ImagePicker from 'react-native-image-picker';
import Toast from '../../components/Toast';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../themes/colors';
import {useDispatch} from 'react-redux';
import {editUsername, handleUpdatePhoto} from './actions';

const EditAccount = () => {
  const {user} = useAppSelector((state: StateProps) => state.auth);
  const [photo, setPhoto] = useState(user.profileImage);
  const [username, setUsername] = useState(user.username);

  const dispatch = useDispatch<AppDispatch>();

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
        handleUpdatePhoto(user._id, response.assets[0].uri, dispatch);
      }
    });
  }, []);
  return (
    <DefaultTemplate backIcon title="Edit Account">
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
                <Text className="text-textPrimary text-3xl font-poppinsSemiBold">
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
              color={colors.secondary}
              height="24"
              width="24"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between items-center bg-white rounded-xl w-full h-12 px-3 mb-4">
          <TextInput
            className="flex-1 font-poppinsLight text-textPrimary"
            placeholder="Username"
            placeholderTextColor={'gray'}
            value={username}
            onChangeText={setUsername}
          />
          <Icon name="User" width={24} height={24} color="#BCBCBC" />
        </View>
        <View className="flex-row justify-between items-center bg-white rounded-xl w-full h-12 px-3">
          <Text className="flex-1 font-poppinsLight text-textPrimary">
            {user.email}
          </Text>
          <Icon name="Mail" width={20} height={20} color="#BCBCBC" />
        </View>

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="w-full rounded-xl my-6"
          colors={['#5BB9CA', '#1D7483']}>
          <TouchableOpacity
            className="w-full h-12 flex justify-center items-center"
            activeOpacity={0.9}
            onPress={() => editUsername(user.email, username, dispatch)}>
            <Text className="text-white text-base font-poppinsMedium shadow">
              Save Changes
            </Text>
          </TouchableOpacity>
        </LinearGradient>
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

export default EditAccount;
