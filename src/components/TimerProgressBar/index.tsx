import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import Icon from '../../themes/icon';
import {TimerProgressBarProps} from './types';
const TimerProgressBar = ({duration, onTimeout}: TimerProgressBarProps) => {
  const animation = useRef(new Animated.Value(0)).current;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 1;
        if (newProgress >= duration) {
          clearInterval(interval);
          onTimeout();
        }
        return newProgress;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: progress,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const width = animation.interpolate({
    inputRange: [0, duration],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <View style={styles.animatedContainer}>
        <Animated.View style={[styles.progressBar, {width}]} />
      </View>
      <Icon name="Penguin" width={80} height={80} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedContainer: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: '#E5E5E5',
  },
  progressBar: {
    height: 20,
    backgroundColor: '#FFC700',
    opacity: 0.7,
    borderRadius: 12,
  },
});

export default TimerProgressBar;
