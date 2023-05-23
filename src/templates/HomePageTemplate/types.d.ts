export interface HomePageTemplateProps {
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
}
