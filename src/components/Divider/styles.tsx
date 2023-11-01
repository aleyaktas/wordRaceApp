import {StyleFnProps, StyleProps} from './types';

export default ({
  top,
  bottom,
  vertical,
  horizontal,
  color,
  type,
  width,
  height,
  weight,
  direction,
}: StyleFnProps): StyleProps => {
  return {
    container: {
      marginTop: top || undefined,
      marginBottom: bottom || undefined,
      marginVertical: vertical || undefined,
      marginHorizontal: horizontal || undefined,
      height: direction === 'vertical' ? height : weight,
      width: direction === 'horizontal' ? width : weight,
      overflow: 'hidden',
    },
    divider: {
      borderWidth: weight,
      borderColor: color,
      borderStyle: type,
      width,
      height,
      position: 'absolute',
      bottom: 0,
    },
  };
};
