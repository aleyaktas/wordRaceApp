import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  createRef,
  useRef,
} from 'react';
import {Animated, Text} from 'react-native';
import style from './styles';
import {ToastParams, ToastRefProps} from './types';
import colors from '../../themes/colors';
import Icon from '../../themes/icon';

let interval: any = null;

const ToastRoot = forwardRef((props, ref: any) => {
  const styles = style();
  const [active, setActive] = useState<boolean>(false);
  const [params, setParams] = useState<ToastParams>({
    title: '',
    type: 'success',
  });

  const animated = useRef(new Animated.Value(0)).current;
  const animatedTime = useRef(new Animated.Value(1)).current;

  useImperativeHandle(
    ref,
    (): ToastRefProps => ({
      open: paramsCurrent => {
        clearTimeout(interval);
        interval = setTimeout(() => {
          Animated.timing(animated, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            setActive(false);
            animatedTime.setValue(1);
          });
          clearTimeout(interval);
        }, 3000);

        setParams(paramsCurrent);

        if (active) {
          animatedTime.setValue(1);
          Animated.sequence([
            Animated.timing(animated, {
              toValue: 0,
              duration: 200,
              useNativeDriver: true,
            }),
            Animated.timing(animated, {
              toValue: 77,
              duration: 200,
              useNativeDriver: true,
            }),
            Animated.timing(animatedTime, {
              toValue: 0,
              duration: 3000,
              useNativeDriver: true,
            }),
          ]).start(() => {});
        } else {
          Animated.sequence([
            Animated.timing(animated, {
              toValue: 77,
              duration: 200,
              useNativeDriver: true,
            }),
            Animated.timing(animatedTime, {
              toValue: 0,
              duration: 3000,
              useNativeDriver: true,
            }),
          ]).start(() => {});
          setActive(true);
        }
      },
      close: () => {
        Animated.timing(animated, {
          toValue: 0,
          duration: 233,
          useNativeDriver: true,
        }).start(() => setActive(false));
      },
    }),
  );

  if (active) {
    const {title, type} = params;
    return (
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{translateY: animated}],
            backgroundColor:
              type === 'success' ? colors.UFOGreen : colors.venetianRed,
          },
        ]}>
        <Icon
          name={type === 'success' ? 'ToastSuccess' : 'ToastError'}
          width="17"
          height="17"
          color={colors.white}
        />
        <Text className="text-white text-center text-xs" style={styles.header}>
          {title}
        </Text>
        <Animated.View style={styles.animatedTime({animatedTime, type})} />
      </Animated.View>
    );
  }
  return null;
});

const toastLoginRef = createRef<ToastRefProps>();

const Toast = () => {
  return <ToastRoot ref={toastLoginRef} />;
};

Toast.open = (params: ToastParams) => {
  toastLoginRef.current?.open(params);
};

Toast.close = (params: ToastParams) => {
  toastLoginRef.current?.close(params);
};

export default Toast;
