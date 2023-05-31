import colors from '../../themes/colors';
import {StyleProps} from './types';

export default (): StyleProps => {
  return {
    container: {
      width: '100%',
      height: 42,
      backgroundColor: colors.background,
      borderRadius: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    timeContainer: {
      width: 36,
      height: 36,
      marginHorizontal: 5,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    userContainer: {},
    user: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    time: {
      borderWidth: 1.6,
      padding: 5,
      color: colors.primary,
      borderColor: colors.primary,
      borderRadius: 17,
      fontSize: 18,
    },
    icon: {},
  };
};
