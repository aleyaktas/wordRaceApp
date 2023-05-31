import React, {useEffect} from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import colors from '../../themes/colors';
import {ProgressCardProps} from './types';

const ProgressCard = ({
  firstPlayerRef,
  secondPlayerRef,
  playerTurn,
  setPlayerTurn,
  playerName,
  playerScore,
  startGame,
  time,
}: ProgressCardProps) => {
  console.log(playerTurn);
  console.log(startGame);

  return (
    <CircularProgress
      ref={firstPlayerRef}
      value={0}
      radius={50}
      startInPausedState={!playerTurn}
      maxValue={10}
      initialValue={10}
      inActiveStrokeColor={playerTurn ? '#E5E5E5' : 'transparent'}
      activeStrokeWidth={6}
      inActiveStrokeWidth={6}
      duration={time}
      showProgressValue={false}
      onAnimationComplete={() => {
        startGame && setPlayerTurn(!playerTurn);
        startGame && secondPlayerRef.current.reAnimate();
      }}
      title={playerName}
      titleFontSize={14}
      titleStyle={{
        fontWeight: '500',
        fontFamily: 'Poppins-Regular',
      }}
      subtitle={playerScore}
      subtitleFontSize={14}
      subtitleColor={colors.secondary}
      subtitleStyle={{
        fontWeight: '700',
      }}
      titleColor="black"
      valuePrefixStyle={{
        width: 10,
        height: 10,
      }}
    />
  );
};

export default ProgressCard;
