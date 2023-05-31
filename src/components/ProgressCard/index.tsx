import React from 'react';
import {View, Text} from 'react-native';
import Icon from '../../themes/icon';
import style from './styles';
import {ProgressCardProps} from './types';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

export default ({
  time,
  isTimerRunning,
  whoIsNext,
  userplay1,
  userplay1Score,
  userplay2,
  userplay2Score,
  timeOver,
}: ProgressCardProps) => {
  const styles = style();
  console.log(time);

  const UrgeWithPleasureComponent = () => (
    <View>
      <CountdownCircleTimer
        key={!isTimerRunning ? time : undefined}
        size={40}
        strokeWidth={5}
        isPlaying={isTimerRunning}
        duration={time}
        onComplete={() => timeOver()}
        colors={['#2AC769', '#86E892', '#FB4E4E', '#F12100']}
        colorsTime={[time, (2 * time) / 3, time / 3, 0]}>
        {({remainingTime}) => <Text className="text-sm">{remainingTime}</Text>}
      </CountdownCircleTimer>
    </View>
  );

  const renderRadius = (input: number | string) => (
    <View style={styles.timeContainer}>
      {typeof input === 'number' && UrgeWithPleasureComponent()}
    </View>
  );

  return (
    <View style={styles.container}>
      {whoIsNext === userplay1 && renderRadius(time)}
      <View style={styles.userContainer}>
        <View style={styles.user}>
          <Text className="text-sm">{userplay1}</Text>
          <Text className="text-sm" style={{marginLeft: 5}}>
            {userplay1Score}
          </Text>
          <Icon
            className="mx-4"
            name="Vs"
            width={40}
            height={36}
            color="black"
          />
          <Text className="text-sm">{userplay2}</Text>
          <Text className="text-sm" style={{marginLeft: 5}}>
            {userplay2Score}
          </Text>
        </View>
      </View>
      {whoIsNext !== userplay1 && renderRadius(time)}
    </View>
  );
};
