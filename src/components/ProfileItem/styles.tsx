import colors from '../../themes/colors';
import {StyleProps} from './types';

export default (): StyleProps => {
  return {
    container: {
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderRadius: 8,
      backgroundColor: colors.white,
    },
    subContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      borderRadius: 13,
    },
    title: {
      marginLeft: 12,
    },
  };
};
