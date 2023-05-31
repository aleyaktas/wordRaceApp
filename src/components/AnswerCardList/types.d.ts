export interface AnswerCardListProps {
  answers: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  handleCheck(answer: string): void;
}
