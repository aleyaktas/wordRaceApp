import {Platform} from 'react-native';
import colors from '../../themes/colors';
import {StyleProps} from './types';

export default (): StyleProps => {
  return {
    footerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 19,
      marginHorizontal: -6,
    },
    footerText: {
      marginRight: 7,
    },
    button: {},
    container: {
      position: 'absolute',
      left: 20,
      right: 20,
      top: Platform.OS === 'android' ? -63 : -30,
      borderRadius: 9,
      backgroundColor: colors.text,
      paddingHorizontal: 17,
      paddingVertical: 15,
      alignItems: 'center',
      flexDirection: 'row',
      zIndex: 9999,
    },
    header: {
      marginLeft: 12,
    },
    animatedTime: ({animatedTime, type}) => ({
      transform: [{scaleX: animatedTime}],
      position: 'absolute',
      height: 4,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: type === 'success' ? colors.aeroBlue : colors.palePink,
    }),
  };
};
