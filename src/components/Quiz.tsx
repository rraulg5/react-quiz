import { GlobalStyle, Wrapper } from '../App.styles';
import { QuestionCard } from './QuestionCard';
import { useQuiz } from '../hooks/useQuiz';

const TOTAL_QUESTIONS = 10;

export const Quiz = () => {
  const {
    loading,
    questions,
    number,
    userAnswers,
    score,
    gameOver,
    startTrivia,
    checkAnswer,
    nextQuestion,
  } = useQuiz({ TOTAL_QUESTIONS });

  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <h1>React Quiz</h1>

        {loading && <p>Loading Questions...</p>}

        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        ) : null}

        {!gameOver ? <p className="score">Score: {score}</p> : null}

        {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 && (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          )}

        {!loading && !gameOver && (
          <QuestionCard
            questionNmb={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
      </Wrapper>
    </>
  );
};
