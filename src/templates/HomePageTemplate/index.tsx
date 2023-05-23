import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../themes/colors';
import Icon from '../../themes/icon';
import {HomePageTemplateProps} from './types';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../../navigation/types';
import LinearGradient from 'react-native-linear-gradient';
import AwesomeAlert from 'react-native-awesome-alerts';
import {TextInput} from 'react-native-gesture-handler';

const HomePageTemplate = ({
  children,
  loading,
  scroll,
  setShowAlert,
}: HomePageTemplateProps) => {
  const Container = scroll ? ScrollView : View;
  const navigation = useNavigation<ScreenProp>();
  const AlertStatusComponent = () => (
    <View className="flex flex-col justify-center items-center mx-5">
      <TextInput
        className="w-full h-12 bg-textInput rounded-xl px-3"
        placeholder="Enter your code"
      />
      <Text className="text-sm text-gray-900 mt-6 mb-4">
        Please enter the code you received via email
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View className="flex-row justify-center gap-2">
          <LinearGradient
            className="flex justify-center items-center !bg-primary w-10 h-10 rounded-full"
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#5BB9CA', '#1D7483']}>
            <Text className="text-white font-bold">AA</Text>
          </LinearGradient>
          <View className="flex">
            <Text className="text-xs">Hello,</Text>
            <Text className="text-base text-black font-bold">Aleyna Aktas</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setShowAlert && setShowAlert(true)}
          className="flex justify-center items-center border !border-iconBorder rounded-md p-[6px]">
          <Icon name="Add" width={24} height={24} color="black" />
        </TouchableOpacity>
      </View>
      <Container style={styles.subContainer}>
        {loading ? (
          <ActivityIndicator
            style={styles.loading}
            color={colors.primary}
            size="large"
          />
        ) : (
          children
        )}
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.background,
  },
  subContainer: {
    flex: 1,
    zIndex: -33,
    width: '100%',
    backgroundColor: colors.background,
    marginBottom: 60,
  },
  loading: {
    marginTop: 63,
  },
  cancelButton: {
    width: (Dimensions.get('window').width - 56) / 2,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: colors.background,
  },
  cancelText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  confirmText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  confirmButton: {
    width: (Dimensions.get('window').width - 56) / 2,
    height: 52,
    justifyContent: 'center',
    borderRadius: 12,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  alertContainer: {
    width: '100%',
    maxWidth: '100%',
  },
  alertContentContainer: {
    width: '100%',
    maxWidth: '96%',
    position: 'absolute',
  },
});

export default HomePageTemplate;
