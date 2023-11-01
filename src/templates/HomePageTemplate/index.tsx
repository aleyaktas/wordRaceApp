import React from 'react';
import {
  ActivityIndicator,
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
import {useAppSelector} from '../../store';
import {StateProps} from '../../navigation/bottomTabNavigator';
import Image from '../../components/Image';

const HomePageTemplate = ({
  children,
  loading,
  scroll,
  setShowAlert,
}: HomePageTemplateProps) => {
  const Container = scroll ? ScrollView : View;
  const {username, profileImage} = useAppSelector(
    (state: StateProps) => state.auth.user,
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <View className="flex-row justify-center gap-2">
          <View className="w-[40px] h-[40px] rounded-full overflow-hidden">
            {profileImage ? (
              <Image
                source={{uri: profileImage}}
                style={{width: '100%', height: '100%'}}
              />
            ) : (
              <View className=" bg-gray-200 w-full h-full flex justify-center items-center">
                <Text className="text-black font-poppinsSemiBold">
                  {username?.charAt(0)?.toUpperCase()}
                </Text>
              </View>
            )}
          </View>
          <View className="flex">
            <Text className="text-xs text-black font-poppinsLight">Hello,</Text>
            <Text className="text-base text-black font-poppinsBold">
              {username}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
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
    paddingVertical: 16,
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
});

export default HomePageTemplate;
