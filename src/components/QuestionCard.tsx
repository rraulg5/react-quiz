import React from 'react';

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: boolean;
  questionNmb: number;
  totalQuestions: number;
};

export const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNmb,
  totalQuestions,
}) => {
  return (
    <div>
      <p className="number">
        Question: {questionNmb} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((answer) => (
          <div>
            <button disabled={userAnswer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
