import {PlayerProps} from '../Game/types';

export interface RoomProps {
  id: string;
  image: string;
  isPublic: boolean;
  messages: [] | any[];
  name: string;
  players: PlayerProps[];
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
