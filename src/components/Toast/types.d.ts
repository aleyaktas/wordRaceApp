import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface ToastParams {
  title: string;
  type?: 'success' | 'error' | 'warning' | 'info';
}

export interface ToastRefProps {
  open(params: ToastParams): any;
  close(params: ToastParams): any;
}

export interface StyleProps {
  footerContainer: StyleProp<ViewStyle> | undefined;
  footerText: StyleProp<TextStyle> | undefined;
  button: StyleProp<ViewStyle> | undefined;
  header: StyleProp<TextStyle> | undefined;
  container: StyleProp<ViewStyle> | undefined;
  animatedTime: (animatedTime: any) => StyleProp<ViewStyle> | undefined;
}

export declare namespace ToastLogin {
  let show: () => void;
  let hide: () => void;
}
