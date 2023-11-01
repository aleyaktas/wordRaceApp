import { ImageStyle, StyleProp, ViewStyle } from 'react-native';
import { Source } from 'react-native-fast-image';

declare type ResizeMode = 'contain' | 'cover' | 'stretch' | 'center';

export interface StyleFnProps {
  width?: number | string;
  height?: number | string;
  flex?: boolean;
  resizeMode?: ResizeMode;
  aspectRatio?: number;
}

export interface ImageProps extends StyleFnProps {
  source?: Source | number;
  url?: string;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ImageStyle>;
  border?: boolean;
}

export interface StyleProps {
  container: object;
  image: object;
  border: object;
}
