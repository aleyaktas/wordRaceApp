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
import LinearGradient from 'react-native-linear-gradient';

const HomePageTemplate = ({
  children,
  loading,
  scroll,
  setShowAlert,
}: HomePageTemplateProps) => {
  const Container = scroll ? ScrollView : View;

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
