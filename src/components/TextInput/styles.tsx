import {Platform} from 'react-native';
import colors from '../../themes/colors';
import {StyleFnProps, StyleProps} from './types';

export default ({
  backgroundColor,
  fontSize,
  activeBackgroundColor,
  shadow,
}: StyleFnProps): StyleProps => {
  return {
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor,
      borderColor: colors.border,
      borderWidth: 1,
      height: 52,
      borderRadius: 10,
      padding: Platform.OS === 'ios' ? 13 : 9,
      shadowColor: shadow ? '#6767679e' : undefined,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: shadow ? 0.25 : 0,
      shadowRadius: 15,
      elevation: shadow ? 10 : 0,
    },
    fContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: activeBackgroundColor,
      height: 52,
      borderColor: colors.primary,
      borderWidth: 1,
      borderRadius: 10,
      padding: Platform.OS === 'ios' ? 13 : 9,
    },
    seperator: {
      width: 1,
      height: '100%',
      backgroundColor: colors.lightGray,
      marginHorizontal: 7,
    },
    fSeperator: {
      width: 1,
      height: '100%',
      backgroundColor: colors.dimGray,
      marginHorizontal: 7,
    },
    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      marginHorizontal: 5,
    },
    input: {
      fontSize,
      flex: 1,
      paddingVertical: 0,
      backgroundColor: colors.white,
      fontFamily: 'Poppins-Regular',
      textAlign: 'left',
    },
    icon: {},
  };
};
