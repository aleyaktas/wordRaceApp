import {Dimensions} from 'react-native';
import {StyleProps} from './types';

export default (): StyleProps => {
  return {
    container: {
      position: 'absolute',
      width: Dimensions.get('window').width - 40,
      alignSelf: 'center',
      right: 0,
      borderRadius: 18,
      backgroundColor: '#fff',
      padding: 36,
      alignItems: 'center',
      zIndex: 999,
    },
    animatedTime: ({fadeAnim}) => ({
      opacity: fadeAnim,
      backgroundColor: '#00000066',
      justifyContent: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      zIndex: 33,
    }),
  };
};
