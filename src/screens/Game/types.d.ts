export interface AnswerProps {
  a: string;
  b: string;
  c: string;
  d: string;
}

export interface PlayerProps {
  username: string;
  image: string;
  isReady: boolean;
  isYourTurn: boolean;
  scoreIndex: number;
  usedJokers: Array<string>;
}
