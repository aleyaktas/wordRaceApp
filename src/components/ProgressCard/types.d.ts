import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export interface ProgressCardProps {
  time: number;
  isTimerRunning: boolean;
  whoIsNext?: string;
  userplay1: string;
  userplay2: string;
  userplay1Score: number;
  userplay2Score: number;
  timeOver: () => void;
}

export interface StyleProps {
  container: StyleProp<ViewStyle> | undefined;
  timeContainer: StyleProp<ViewStyle> | undefined;
  userContainer: StyleProp<ViewStyle> | undefined;
  user: StyleProp<ViewStyle> | undefined;
  time: StyleProp<TextStyle> | undefined;
  icon: StyleProp<ViewStyle> | undefined;
}
