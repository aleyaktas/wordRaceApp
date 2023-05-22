export interface IntroStepProps {
  step: number;
  title: string;
  description: string;
  image: string;
  buttonLabel: string;
  buttonAction: () => void;
}
