import React, {useState} from 'react';
import {View} from 'react-native';
import IntroStep from '../../components/IntroStep';

const Intro = () => {
  const [step, setStep] = useState(1);
  const introInfo = [
    {
      step: 1,
      title: 'Create Room',
      image: 'Home1',
      description:
        'How many English words do you know? How about learning more words by playing? If you want, you can create a room and invite your friends to the room',
      buttonLabel: 'Skip',
    },
    {
      step: 2,
      title: 'Join Room',
      image: 'Home2',
      description:
        'Or you can join the created online rooms and play with different users. When you enter the room, remember to use your jokers to answer questions.',
      buttonLabel: 'Skip',
    },
    {
      step: 3,
      title: 'Online Chat',
      image: 'Home3',
      description:
        'You can add friends and chat while playing, sign up and start the game. Good luck!',
      buttonLabel: 'Join Us',
    },
  ];
  const [introShow, setIntroShow] = useState(introInfo[0]);

  return (
    <View>
      <IntroStep
        step={introShow.step}
        title={introShow.title}
        description={introShow.description}
        image={introShow.image}
        buttonLabel={introShow.buttonLabel}
        buttonAction={async () => {
          if (step < 3) {
            await setStep(step + 1);
            setIntroShow(introInfo[step]);
          } else {
            console.log('Join Us');
          }
        }}
      />
    </View>
  );
};

export default Intro;
