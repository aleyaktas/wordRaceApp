import {StyleProp, ViewStyle} from 'react-native';

export interface StyleFnProps {
  top?: number;
  bottom?: number;
  vertical?: number;
  horizontal?: number;
  color?: string;
  type?: 'solid' | 'dotted' | 'dashed' | undefined;
  width?: number | string;
  height?: number | string;
  weight?: number;
  direction?: 'horizontal' | 'vertical';
}

export interface DividerProps extends StyleFnProps {
  style?: StyleProp<ViewStyle> | undefined;
}

export interface StyleProps {
  container: StyleProp<ViewStyle> | undefined;
  divider: StyleProp<ViewStyle> | undefined;
}
