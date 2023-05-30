import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface AlertBoxParams {
  image: string;
  username: string;
  onConfirmPress?: () => void;
  onCancelPress?: () => void;
}

export interface StyleFnProps {
  language?: string;
}

export interface ToastRefProps extends StyleFnProps {
  open(params: ToastParams): any;
  close(params: ToastParams): any;
}

export interface StyleProps {
  container: StyleProp<ViewStyle> | undefined;
  animatedTime: (animatedTime: any) => StyleProp<ViewStyle> | undefined;
}

export declare namespace ToastLogin {
  let show: () => void;
  let hide: () => void;
}
