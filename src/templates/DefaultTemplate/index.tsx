import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../themes/colors';
import Icon from '../../themes/icon';
import {DefaultTemplateProps} from './types';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../../navigation/types';

const DefaultTemplate = ({
  children,
  loading,
  scroll,
  leftIconName,
  rightIconName,
  leftIconAction,
  rightIconAction,
  title,
  backIcon = false,
}: DefaultTemplateProps) => {
  const Container = scroll ? ScrollView : View;
  const navigation = useNavigation<ScreenProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        {leftIconName && (
          <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.button, styles.backButton]}
            onPress={leftIconAction}>
            <Icon name={leftIconName} width={24} height={24} color="black" />
          </TouchableOpacity>
        )}
        {backIcon && (
          <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.button, styles.backButton]}
            onPress={() => navigation.goBack()}>
            <Icon name="Back" width={24} height={24} color="black" />
          </TouchableOpacity>
        )}
        <Text
          style={styles.title}
          className="text-base text-black font-poppinsBold">
          {title}
        </Text>
        {rightIconName && (
          <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.button, styles.rightButton]}
            onPress={rightIconAction}>
            <Icon name={rightIconName} width={24} height={24} color="black" />
          </TouchableOpacity>
        )}
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
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
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
  },
  loading: {
    marginTop: 63,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    zIndex: 44,
  },
  rightButton: {
    position: 'absolute',
    right: 20,
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.iconBorder,
    borderRadius: 12,
    padding: 6,
  },
});

export default DefaultTemplate;
