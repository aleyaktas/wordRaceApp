import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface ProfileItemProps {
  onPress(): void;
  title: string;
  iconName: string;
  customComponent?: JSX.Element;
  unvisitedMessages?: number;
}

export interface StyleProps {
  container: StyleProp<ViewStyle> | undefined;
  subContainer: StyleProp<ViewStyle> | undefined;
  checkbox: StyleProp<ViewStyle> | undefined;
  title: StyleProp<TextStyle> | undefined;
}
