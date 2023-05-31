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
      <View
        style={{
          width: '45%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        {whoIsNext === userplay1 && renderRadius(time)}

        <Text
          className={`text-sm ${
            whoIsNext === userplay1
              ? 'font-poppinsBold text-gray-800'
              : 'font-poppinsMedium text-gray-700'
          } `}>
          {userplay1}
        </Text>
        <Text
          className={`text-sm ${
            whoIsNext === userplay1
              ? 'font-poppinsBold text-primary'
              : 'font-poppinsMedium text-gray-700'
          } `}
          style={{marginLeft: 5}}>
          {userplay1Score}
        </Text>
      </View>
      <Icon className="mx-4" name="Vs" width={40} height={36} color="black" />
      <View
        style={{
          width: '45%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Text
          className={`text-sm ${
            whoIsNext === userplay2
              ? 'font-poppinsBold text-gray-800'
              : 'font-poppinsMedium text-gray-700'
          } `}>
          {userplay2}
        </Text>
        <Text
          className={`text-sm ${
            whoIsNext === userplay2
              ? 'font-poppinsBold text-primary'
              : 'font-poppinsMedium text-gray-700'
          } `}
          style={{marginLeft: 5}}>
          {userplay2Score}
        </Text>
        {whoIsNext !== userplay1 && renderRadius(time)}
      </View>
    </View>
  );
};
