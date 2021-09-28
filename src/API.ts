import { shuffleArray } from './utils';
export interface Result {
  results: Question[];
}

export interface Question {
  category: string;
  type: Type;
  difficulty: Difficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export type QuestionState = Question & { answers: string[] };

export enum Type {
  Multiple = 'multiple',
}

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = ' hard',
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const data: Result = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
