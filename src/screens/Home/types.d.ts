export interface RoomProps {
  id: string;
  image: string;
  isPublic: boolean;
  messages: [] | any[];
  name: string;
  players: {
    username: string;
    isReady: boolean;
    isYourTurn: boolean;
    scoreIndex: number;
    usedJokers: [] | any[];
    username: string;
  }[];
  questionIndex: number;
  questions: {
    question: string;
    answer: string;
    a: string;
    b: string;
    c: string;
    d: string;
  }[];
  timer: number;
}
