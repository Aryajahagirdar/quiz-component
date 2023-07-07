import React, { useState } from 'react';
import QuizQuestion from './QuizQuestion';
import quizData from './quiz_data.json';
import QuizEnd from './QuizEnd';
import StartQuiz from './StartQuiz';

const Quiz = () => {
    const [quizPosition, setQuizPosition] = useState(1);
    const isQuizEnd = quizPosition - 1 === quizData.quiz_questions.length;

    const showNextQuestion = () => {
        return setQuizPosition(quizPosition+1);
    }

    const handleResetClick = () => {
        <StartQuiz />
    }

    return (
        <div>
            {isQuizEnd ? <QuizEnd resetClickHandler = {handleResetClick}/> : <QuizQuestion quiz_question={quizData.quiz_questions[quizPosition - 1]} showNextQuestionHandler={showNextQuestion} />}
        </div>
    );
};

export default Quiz;

