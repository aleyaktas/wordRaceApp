import React, {useEffect, useState} from 'react';
import {Animated, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import colors from '../../themes/colors';
import Icon from '../../themes/icon';
import LinearGradient from 'react-native-linear-gradient';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {ScreenProp} from '../../navigation/types';
import DefaultTemplate from '../../templates/DefaultTemplate';
import {checkResetCode, resetPassword} from './actions';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../store';

const CELL_SIZE = 70;
const CELL_BORDER_RADIUS = 6;

const ForgotPassword = ({
  route,
}: {
  route: RouteProp<{params: {email: String}}>;
}) => {
  const CELL_COUNT = 5;
  const [code, setCode] = useState('');
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [time, setTime] = useState<number>(180);
  const navigation = useNavigation<ScreenProp>();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) setTime(time - 1);
    }, 1000);
    return () => clearTimeout(timer);
  });

  const {Value, Text: AnimatedText} = Animated;

  const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
  const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
  const animateCell = ({
    hasValue,
    index,
    isFocused,
  }: {
    hasValue: boolean;
    index: number;
    isFocused: boolean;
  }) => {
    Animated.parallel([
      Animated.timing(animationsColor[index], {
        useNativeDriver: false,
        toValue: isFocused ? 1 : 0,
        duration: 250,
      }),
      Animated.spring(animationsScale[index], {
        useNativeDriver: false,
        toValue: hasValue ? 0 : 1,
      }),
    ]).start();
  };

  const renderCell = ({index, symbol, isFocused}: any) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [colors.primary, colors.inputBackground],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [colors.inputBackground, colors.inputBackground],
          }),
      color: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [colors.primary, colors.darkText],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [colors.primary, colors.darkText],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    setTimeout(() => {
      animateCell({hasValue, index, isFocused});
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  return (
    <DefaultTemplate backIcon bgColor="white">
      <View className="flex w-full h-full mt-24 items-center px-5">
        <Icon name="Logo" width={100} height={100} />
        <Text className="font-poppinsBold text-2xl text-textPrimary my-3">
          Forgot Password
        </Text>
        <Text className="font-poppinsRegular text-sm text-textPrimary px-10 text-center mb-6 mt-1">
          Please enter the 5-digit verification code sent to the your email
          address.
        </Text>
        <CodeField
          ref={ref}
          {...props}
          value={code}
          onChangeText={(e: any) => {
            setCode(e);
          }}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={renderCell}
        />
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          className="w-full rounded-xl mt-6 mb-4"
          colors={['#5BB9CA', '#1D7483']}>
          <TouchableOpacity
            className="w-full h-12 flex justify-center items-center"
            activeOpacity={0.9}
            onPress={() =>
              checkResetCode(
                route.params.email,
                parseInt(code),
                navigation,
                dispatch,
              )
            }>
            <Text className="text-white text-base font-poppinsMedium shadow">
              Verify
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text style={styles.headerWrapper} className="mb-4 text-textPrimary">
          <Text className="font-base text-textPrimary text-center font-medium">
            {'0' + Math.floor(time / 60).toString()}{' '}
          </Text>
          <Text className="font-base text-textPrimary text-center font-medium">
            :
          </Text>
          <Text className="font-base text-textPrimary text-center font-medium">
            {' '}
            {(time % 60).toString()?.length == 1
              ? '0' + (time % 60).toString()
              : (time % 60).toString()}{' '}
          </Text>
        </Text>
        <View className="flex-row gap-1">
          <TouchableOpacity
            onPress={() => resetPassword(route.params.email, dispatch)}
            activeOpacity={0.9}
            disabled={time > 0}>
            <Text
              className={`${
                time > 0 ? 'text-gray-400' : 'text-gray-900'
              } text-sm font-poppinsBold underline`}>
              Resend Code
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DefaultTemplate>
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginTop: 10,
    flexDirection: 'row',
  },
  cell: {
    width: 47,
    height: 47,
    lineHeight: 43,
    fontSize: 19,
    borderWidth: 0,
    borderColor: '#f5f5f5',
    backgroundColor: '#f5f5f5',
    borderRadius: 13,
    overflow: 'hidden',
    textAlign: 'center',
    marginHorizontal: 7,
  },
  focusCell: {
    borderColor: '#075765',
    borderWidth: 1,
  },
  headerWrapper: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
    textAlign: 'center',
    marginTop: 15,
  },
});

export default ForgotPassword;
