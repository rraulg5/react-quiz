import React, { useState } from 'react';
import { fetchQuizQuestions, Difficulty, QuestionState } from '../API';
import { AnswerObject } from '../types/AnswerObject';

interface Props {
  TOTAL_QUESTIONS: number;
}

export const useQuiz = ({ TOTAL_QUESTIONS }: Props) => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    try {
      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        Difficulty.EASY
      );

      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const userAnswer = e.currentTarget.value;

      // Compare against correct answer
      const correct = questions[number].correct_answer === userAnswer;
      if (correct) {
        setScore(score + 1);
      }

      const answerObj: AnswerObject = {
        question: questions[number].question,
        answer: userAnswer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers([...userAnswers, answerObj]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return {
    loading,
    questions,
    number,
    userAnswers,
    score,
    gameOver,
    startTrivia,
    checkAnswer,
    nextQuestion,
  };
};
