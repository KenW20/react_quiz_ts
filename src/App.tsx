import React, { useState, FC } from 'react';
import { fetchQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
import Option from './components/Option';
// Types
import { QuestionState, Category, Difficulty } from './API';
// Styles
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTION = 10;

const App: FC = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [option, setOption] = useState({ category: Category.Computers, difficulty: Difficulty.EASY });

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuestions(
      TOTAL_QUESTION, option.category, option.difficulty
    );
    setQuestions(newQuestions);

    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // users answer
      const answer = e.currentTarget.value;
      // check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // check score if correct
      if (correct) setScore(prev => prev + 1);
      // Save answer in array
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      }
      setUserAnswers(prev => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Move on to the next if not the last
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTION) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  const checkOption = (option: { category: Category, difficulty: Difficulty }) => {
    console.log(option);
    setOption(option);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Trivia Quiz</h1>

        {gameOver || userAnswers.length === TOTAL_QUESTION ?
          (<div className="start-region">
            <button className="start" onClick={startTrivia}>Start</button>
            <Option category={option.category} difficulty={option.difficulty} callback={checkOption} />
          </div>
          ) : null}

        {!gameOver ? <p className="score">Score: {score}</p> : null}

        {loading && <p>Loading Questions ...</p>}

        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTION}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTION - 1
          ? (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          ) : null}

      </Wrapper>
    </>
  );
}

export default App;
