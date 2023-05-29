export interface DefaultTemplateProps {
  back?: boolean;
  header?: string;
  bell?: boolean;
  space?: boolean;
  scroll?: boolean;
  children?: React.ReactNode;
  color?: Array<string>;
  loading?: boolean;
  indicatorLoading?: boolean;
  backIconColor?: string;
  customBackPress?(): void | undefined;
  leftIconName?: string;
  leftIconAction?(): void | undefined;
  rightIconName?: string;
  rightIconAction?(): void | undefined;
  pendingRequestLength?: number;
  backIcon?: boolean;
  title?: string;
}
