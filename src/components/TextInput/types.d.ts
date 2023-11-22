import {KeyboardType, StyleProp, ViewStyle} from 'react-native';

export interface StyleProps {
  container: object;
  fContainer: object;
  seperator: object;
  fSeperator: object;
  leftContainer: object;
  input: object;
  icon: object;
}

export interface StyleFnProps {
  backgroundColor?: string;
  activeBackgroundColor?: string;
  fontSize?: number;
  shadow?: boolean;
}

export interface TextInputProps extends StyleFnProps {
  onChange?(text: string): void;
  onPressIn?(): void;
  onFocus?(): void;
  autoFocus?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  placeholder: string;
  iconName?: string;
  iconWidth?: string;
  iconHeight?: string;
  multiline?: boolean;
  numberOfLine?: number;
  onButtonPress?(): void;
  buttonIcon?: string;
  buttonIconWidth?: string;
  buttonIconHeight?: string;
  maxLength?: number;
  iconColor?: string;
  iconPosition?: string;
  mask?: string;
  initialValue?: string;
  containerStyle?: StyleProp<ViewStyle>;
  value?: string;
  editable?: boolean;
  autoCorrect?: boolean;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
}
