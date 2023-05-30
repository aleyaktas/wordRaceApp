import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  createRef,
  useRef,
} from 'react';
import {Animated, Dimensions, Text, TouchableOpacity, View} from 'react-native';
import style from './styles';
import {AlertBoxParams, ToastRefProps} from './types';
import Icon from '../../themes/icon';
import LinearGradient from 'react-native-linear-gradient';

const InvitationModalRoot = forwardRef((props, ref: any) => {
  const styles = style();
  const [active, setActive] = useState<boolean>(false);
  const [params, setParams] = useState<AlertBoxParams>({
    image: '',
    username: '',
    onConfirmPress: () => {},
    onCancelPress: () => {},
  });

  const animated = useRef(
    new Animated.Value(Dimensions.get('window').width),
  ).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useImperativeHandle(
    ref,
    (): ToastRefProps => ({
      open: paramsCurrent => {
        setParams(paramsCurrent);

        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 130,
            useNativeDriver: true,
          }),
          Animated.timing(animated, {
            toValue: -20,
            duration: 130,
            useNativeDriver: true,
          }),
        ]).start(() => {});
        setActive(true);
      },
      close: () => {
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 130,
            useNativeDriver: true,
          }),
          Animated.timing(animated, {
            toValue: Dimensions.get('window').width,
            duration: 130,
            useNativeDriver: true,
          }),
        ]).start(() => setActive(false));
      },
    }),
  );

  if (active) {
    const {image, username, onConfirmPress, onCancelPress} = params;
    return (
      <Animated.View style={styles.animatedTime({fadeAnim})}>
        <Animated.View
          style={[styles.container, {transform: [{translateX: animated}]}]}>
          <Icon
            className="mx-auto mb-4"
            name={image}
            width={100}
            height={100}
          />
          <Text className="text-base font-poppinsBold text-black my-3">
            Game Invitation
          </Text>
          <Text className="text-center text-base font-poppinsMedium">
            <Text className="font-poppinsMedium text-base text-secondary">
              {username}{' '}
            </Text>
            invited you to a game
          </Text>
          <View className="flex-row mt-6">
            <TouchableOpacity
              onPress={() => {
                if (onCancelPress) onCancelPress();
                Animated.sequence([
                  Animated.timing(animated, {
                    toValue: Dimensions.get('window').width,
                    duration: 130,
                    useNativeDriver: true,
                  }),
                  Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 130,
                    useNativeDriver: true,
                  }),
                ]).start(() => setActive(false));
              }}
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
                onPress={() => {
                  if (onConfirmPress) onConfirmPress();
                  Animated.sequence([
                    Animated.timing(animated, {
                      toValue: Dimensions.get('window').width,
                      duration: 130,
                      useNativeDriver: true,
                    }),
                    Animated.timing(fadeAnim, {
                      toValue: 0,
                      duration: 130,
                      useNativeDriver: true,
                    }),
                  ]).start(() => setActive(false));
                }}
                className="w-full h-12 flex justify-center items-center"
                activeOpacity={0.9}>
                <Text className="text-white text-base font-poppinsMedium shadow">
                  Join
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </Animated.View>
      </Animated.View>
    );
  }
  return null;
});

const invitationModalRootRef = createRef<ToastRefProps>();

const InvitationModal = () => {
  return <InvitationModalRoot ref={invitationModalRootRef} />;
};

InvitationModal.open = (params: AlertBoxParams) => {
  invitationModalRootRef.current?.open(params);
};

InvitationModal.close = (params: AlertBoxParams) => {
  invitationModalRootRef.current?.close(params);
};

export default InvitationModal;
